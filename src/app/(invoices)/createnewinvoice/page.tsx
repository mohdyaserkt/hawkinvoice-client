"use client";
import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { PiHandbag, PiCopySimple } from "react-icons/pi";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { handleCreateNewItem } from "@/utils/items/createNewItem";
import Createinvoice from "@/components/invoice/createinvoice/createinvoice";
import { handleGetCustomersforinvoice } from "@/utils/Invoice/getCustomers";
import { handleGetItemsForInvoice } from "@/utils/Invoice/getItems";
import { IInvoice, IItem } from "../../../../types/invoice/createinvoice";
import { handleCreateNewInovice } from "@/utils/Invoice/createNewInvoice";











const GetStarted = () => {
  const [myCustomers, setmyCustomers] = useState<ICustomerData[]>([]);

  useEffect(() => {
    handleGetCustomersforinvoice()
      .then(({ data }: any) => {
        setmyCustomers(data.customers);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);







  const [paymentMode, setpaymentMode] = useState(false);
  const router = useRouter();
  const slectRef = useRef<HTMLDivElement>(null);
  const [customerId, setCustomerId] = useState("");
  const [customerEmail, setcustomerEmail] = useState("");
  const [items, setItems] = useState<IItem[]>([
    { quantity: 0, rate: 0, itemName: "", id: "" },
  ]);
  const [subtotal, setsubTotal] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [adjustment, setadjustment] = useState(0);
  const [errors, setErrors] = useState<{
    field: string;
    errors: string[];
  } | null>({ field: "", errors: [""] });
  

  const discountType = useRef(null);





  useEffect(() => {
    const newsubTotal = items.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.rate;
    }, 0);

    setsubTotal(newsubTotal);
  }, [items]);
  console.log(items, "myitems");
  console.log(subtotal, "mysubtotal");





  const addRow = () => {
    setItems([...items, { quantity: 0, rate: 0, itemName: "", id: "" }]);
  };






  const addSelectedItem = (rate: number, itemName: string, id: string) => {
    setItems([
      ...items,
      { quantity: 1, rate: rate, itemName: itemName, id: id },
    ]);
  };








  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newItems = [...items];
    newItems[index][name] = value;
    setItems(newItems);
  };






  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let inputObject: { [key: string]: string | Number | object|Date } = {};

    formData.forEach((value, key) => {
      inputObject[key] = String(value);
    });
    inputObject.invoiceDate=new Date()
    inputObject.subTotal = subtotal;
    inputObject.Total = subtotal - discount + adjustment;
    inputObject.status = inputObject.recievedPayment ? "paid" : "pending";

    inputObject.Adjustment = {
      adjustment: inputObject.adjustment,
      adjustmentValue: inputObject.adjustmentValue,
    };
    inputObject.itemDetails = [...items];
    delete inputObject.adjustment;
    delete inputObject.adjustmentValue;
    delete inputObject.discountType;
    delete inputObject.itemName;
    delete inputObject.quantity;
    delete inputObject.rate;
    delete inputObject.recievedPayment;
    

    console.log(inputObject);

    let invoice = inputObject as unknown as IInvoice;
    handleCreateNewInovice({
      invoice,
      setError,
    })
      .then((res: any) => {
        if (res) {
          console.log(res);
          router?.push("/invoices");
          alert(res);
        }
      })
      .catch((err: ApiError) => {
        console.log(err.message);
        alert(err);
      });
      
  };








  const checkDiscount = (e: React.FocusEvent<HTMLInputElement>) => {
    const discount = e.target.value as unknown as number;
    const dsctype = (discountType?.current as unknown as HTMLInputElement)
      ?.value;
    if (dsctype == "price") {
      setdiscount(discount);
    } else if (dsctype == "percentage") {
      const discountAmount = (subtotal * discount) / 100;
      setdiscount(discountAmount);
    }
  };





  
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex - 1;
    setCustomerId(myCustomers[selectedIndex].id as string);
    setcustomerEmail(myCustomers[selectedIndex].email);
    console.log("Selected Option Index:", selectedIndex);
  };
  

  const setError = (field: string, errorMessages: string[]) =>
    setErrors({ field, errors: errorMessages });
  
  return (
    <>
      <div className="h-screen">
        <nav className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 w-52  mr-1">
            <LiaFileInvoiceDollarSolid className="text-white w-8 h-8" />
            <h3 className="text-white text-lg">HawkInvoice</h3>
          </div>
          <div className="flex justify-between items-center border border-white w-full">
            <div className=" flex items-center">
              <MdRefresh className="text-white w-5 h-5 m-3" />
              <div className="flex items-center  bg-secondary p-1 px-2 m-1 rounded-lg border-secondary border lg:h-8">
                <AiOutlineSearch className="text-black w-5 h-5" />
                <span className="text-gray-900 text-lg mx-2">|</span>
                <div className="mr-[10px]">
                  <input
                    type="text"
                    placeholder="Search in Customers(/)"
                    className="bg-transparent text-black border-none focus:outline-none placeholder-black text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <BsPlusSquareFill className="bg-black text-secondary" />
              <span className=" text-lg text-white ">|</span>
              <AiOutlineSetting className=" text-white" />
              <span className=" text-lg text-white ">|</span>
              <select className="">
                <option>Organization</option>
                <option>Organization 2</option>
                <option>Organization 3</option>
              </select>
              <div className="pr-2">
                <img
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                  alt="Your Alt Text"
                  className="rounded-full w-8   h-8   "
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex">
          <div className=" w-56 flex flex-col gap-3 py-3 px-2 border ">
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <AiOutlineHome className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Home</p>
            </div>
            <div className="flex items-center bg-secondary h-7 rounded-lg space-x-2">
              <AiOutlineUser className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Customers</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <PiHandbag className="w-4 h-4 ml-2 text-white " />
              <p className="text-sm text-white">Items</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <LiaFileInvoiceSolid className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Invoices</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <img
                src="/recievedpayments.svg"
                alt=""
                className="w-4 h-4 ml-2 text-white"
              />
              <p className="text-sm text-white">Payments Recieved</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <TbReceipt className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Expenses</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <BsFileEarmarkBarGraph className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Reports</p>
            </div>
          </div>
          <div className="w-full">
            <div className="p-5 flex justify-between w-full border-r-[1px] border-b-[1px] ">
              <div className="text-white">
                <h2 className="text-xl">New Invoice</h2>
              </div>
            </div>

            <div className="pt-7 pl-16">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="text-[13px] text-white"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-[72px]">
                      <p>
                        Customer Name<span className="text-red-500">*</span>
                      </p>
                      <div className="flex items-center">
                        <div>
                          <select
                            name="customerName"
                            className=" bg-transparent border rounded-l-md w-[503px] h-8 px-3"
                            onChange={handleSelectChange}
                            required
                          >
                            <option hidden value="" className="">
                              Select a Customer
                            </option>
                            {myCustomers.map((item: any, index) => (
                              <option
                                key={item.id}
                                value={item.displayName}
                                className=""
                              >
                                {item.displayName}
                              </option>
                            ))}
                          </select>
                          <input
                            name="customerId"
                            className="hidden"
                            defaultValue={customerId}
                            type="text"
                          />
                          <input
                            name="customerEmail"
                            className="hidden"
                            defaultValue={customerEmail}
                            type="text"
                          />
                        </div>
                        <div className="bg-secondary h-8 w-8 flex items-center justify-center  rounded-r-md">
                          <FiSearch />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-[113px] items-center">
                      <div>
                        <p className="text-white text-sm">
                          Invoice# <span className="text-red-500">*</span>
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input
                          name="invoiceNumber"
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[85px] items-center">
                      <div>
                        <p className="text-white text-sm">Order Number</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          name="orderNumber"
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[87px] items-center">
                      <div>
                        <p className="text-white text-sm">
                          Invoice Date <span className="text-red-500">*</span>
                        </p>
                      </div>
                      <div className="flex gap-8 items-center ">
                        <div className="flex items-center">
                          <input
                            name="invoiceDate"
                            className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                            type="date"
                            defaultValue={
                              new Date().toISOString().split("T")[0]
                            }
                          />
                        </div>
                        <div>
                          <p className="text-white text-sm">Due Date</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            name="dueDate"
                            className="focus:outline-none rounded-md w-40 h-8 text-xs text-black p-2"
                            type="date"
                            defaultValue={
                              new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                                .toISOString()
                                .split("T")[0]
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="w-7/12" />
                    <div className="flex gap-[99px] items-center">
                      <div>
                        <p className="text-white text-sm">Salesperson</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          name="salesPerson"
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <hr className="w-7/12" />
                    <div className="flex gap-[132px] items-center">
                      <div>
                        <p className="text-white text-sm">Subject</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          name="subject"
                          className="focus:outline-none rounded-md w-[470px] h-8 text-xs text-black p-2 placeholder:text-gray-900"
                          type="text"
                          placeholder="Let your customer know what this Invoice is for"
                        />
                      </div>
                    </div>
                    <div>
                      <table className="w-7/12 ">
                        <thead className="bg-secondary h-8 text-gray-900 border border-secondary">
                          <tr className="">
                            <th className="text-start pl-1">ITEM DETAILS</th>
                            <th>QUANTITY</th>
                            <th>RATE</th>
                            <th>AMOUNT</th>
                          </tr>
                        </thead>
                        <tbody className="border text-xs">
                          {items.map((item, index) => (
                            <Createinvoice
                              item={item}
                              handleInputChange={handleInputChange}
                              key={index}
                              index={index}
                              addSelectedItem={addSelectedItem}
                            />
                          ))}
                        </tbody>
                      </table>
                      <div
                        onClick={addRow}
                        className="text-xs border flex gap-1 items-center cursor-pointer  rounded-md border-secondary text-secondary w-36 p-2 m-2"
                      >
                        <IoMdAddCircleOutline className="w-4 h-4" /> Add another
                        line
                      </div>
                    </div>
                    <div className="flex gap-16">
                      <div className=" flex flex-col gap-4">
                        <div className=" flex flex-col gap-1">
                          <p className="text-xs">Customer Notes</p>
                          <textarea
                            name="customerNotes"
                            className="focus:outline-none bg-transparent border rounded-md w-[448px] h-20 p-3"
                          ></textarea>
                        </div>
                        <div className=" flex flex-col gap-1">
                          <p className="text-xs">Terms and Conditions</p>
                          <textarea
                            name="termsAndConditions"
                            className="focus:outline-none bg-transparent border rounded-md w-[448px] h-20 p-3"
                            placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
                          ></textarea>
                        </div>
                      </div>
                      <div className="border rounded-md p-5 flex flex-col gap-5  ">
                        <div className="flex  justify-between text-sm">
                          <p>Sub Total</p>
                          <p>{subtotal}.00</p>
                        </div>
                        <div className="flex  justify-between text-sm items-center">
                          <div className="flex gap-[100px] items-center">
                            <p>Discount</p>
                            <div className=" flex items-center">
                              <input
                                name="discount"
                                type="text"
                                onBlur={checkDiscount}
                                className="bg-transparent border text-center rounded-s-md w-16 h-8  focus:outline-none"
                              />
                              <select
                                ref={discountType}
                                name="discountType"
                                className="bg-transparent border-y border-r text-center h-8 rounded-e-md "
                              >
                                <option value="percentage">%</option>
                                <option value="price">₹</option>
                              </select>
                            </div>
                          </div>
                          <p>- {discount}</p>
                        </div>
                        <div className="flex gap-6 justify-between items-center text-sm">
                          <div className="flex  gap-8">
                            <input
                              name="adjustment"
                              type="text"
                              required={adjustment > 0 ? true : false}
                              className="bg-transparent border h-8 rounded-md w-32 focus:outline-none"
                            />
                            <input
                              name="adjustmentValue"
                              defaultValue={adjustment}
                              onChange={(e) =>
                                setadjustment(Number(e.target.value))
                              }
                              type="text"
                              className="bg-transparent border h-8 rounded-md w-[101px] focus:outline-none text-center"
                            />
                          </div>
                          <p>{adjustment}.00</p>
                        </div>
                        <hr />
                        <div className="flex justify-between text-base">
                          <h2>Total ( ₹ ) </h2>
                          <h2>{subtotal - discount + adjustment}.00</h2>
                        </div>
                      </div>
                    </div>
                    <hr className="w-7/12" />
                    <div>
                      <div className="inline-flex items-center ">
                        <label
                          className="relative flex cursor-pointer  items-center rounded-full p-2"
                          data-ripple-dark="true"
                        >
                          <input
                            name="recievedPayment"
                            id="login"
                            checked={paymentMode}
                            type="checkbox"
                            onChange={() => {
                              setpaymentMode(!paymentMode);
                            }}
                            className="before:content[''] peer relative sm:w-3 sm:h-3 md:h-4 md:w-4 cursor-pointer appearance-none rounded border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black  checked:bg-black checked:before:bg-black hover:before:opacity-10"
                          />
                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </label>
                        <label className="mt-px cursor-pointer select-none  ">
                          I have received the payment
                        </label>
                      </div>

                      <div
                        className={`${
                          paymentMode ? "flex" : "hidden"
                        } items-center gap-5 my-3 px-2 `}
                      >
                        <p>Payment Mode</p>
                        <select
                          name="paymentMode"
                          className="bg-transparent rounded-md p-2 border"
                        >
                          <option value="cash">cash</option>
                          <option value="onlinePayment">Online Payment</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-10">
                      <button className="text-xs border  rounded-md border-secondary text-secondary w-36 p-2">
                        save as Draft
                      </button>
                      <select className="bg-transparent border rounded-md p-2">
                        <option value="">save and send</option>
                        <option value="">Save and Print</option>
                      </select>

                      <button className="text-xs border  rounded-md border-red-700 text-red-700 w-16 py-2 p-2">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
