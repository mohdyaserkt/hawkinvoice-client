"use client";
import React, { useEffect, useState } from "react";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { PiHandbag, PiCopySimple } from "react-icons/pi";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useParams, useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { handleEditCustomer } from "@/utils/Customers/editCustomer";
import { handleGetSingleCustomer } from "@/utils/Customers/getSingleCustomer";
import Image from "next/image";

const EditCustomer = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const [currentCustomer, setcurrentCustomer] = useState<ICustomerData>();

  useEffect(() => {
    handleGetSingleCustomer(id as string)
      .then(({ data }: any) => {
        console.log(data.customer);

        setcurrentCustomer(data.customer as ICustomerData);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const [
      custumerTypeBusinessInput,
      custumerTypeIndividualInput,
      salutationInput,
      firstNameInput,
      lastNameInput,
      companyNameInput,
      DisplayNameInput,
      EmailInput,
      WorkPhoneInput,
      MobileInput,
      // billingAddressAttention,
      // billingAddressRegion,
      // billingAddressStreet1,
      // billingAddressStreet2,
      // billingAddressCity,
      // billingAddressState,
      // shippingAddressAttention,
      // shippingAddressRegion,
      // shippingAddressStreet1,
      // shippingAddressStreet2,
      // shippingAddressCity,
      // shippingAddressState,
    ] = Array.from(form.elements) as HTMLInputElement[];

    const customer = {
      id: id as string,
      customerType:
        custumerTypeBusinessInput.value == "on" ? "business" : "individual",
      salutation: salutationInput.value,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      customerCompanyName: companyNameInput.value,
      displayName: DisplayNameInput.value,
      email: EmailInput.value,
      workPhone: WorkPhoneInput.value as unknown as number,
      mobile: MobileInput.value as unknown as number,
      // billingAddress: {
      //   attention: billingAddressAttention.value,
      //   region: billingAddressRegion.value,
      //   street1: billingAddressStreet1.value,
      //   street2: billingAddressStreet2.value,
      //   city: billingAddressCity.value,
      //   state: billingAddressState.value,
      // },
      // shippingAddress: {
      //   attention: shippingAddressAttention.value,
      //   region: shippingAddressRegion.value,
      //   street1: shippingAddressStreet1.value,
      //   street2: shippingAddressStreet2.value,
      //   city: shippingAddressCity.value,
      //   state: shippingAddressState.value,
      // },
    };
    console.log(customer);

    handleEditCustomer({
      customer,
      setError,

      // businessName: organizationState.businessName as string,
      // typeOfbusiness: organizationState.typeOfbusiness as string,
    })
      .then((res: any) => {
        if (res) {
          console.log(res);
          router?.push("/customers");
          alert(res);
        }
      })
      .catch((err: ApiError) => {
        console.log(err.message);
        alert(err);
      });
  };
  const [errors, setErrors] = useState<{
    field: string;
    errors: string[];
  } | null>({ field: "", errors: [""] });
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
                <Image
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                  alt="Your Alt Text"
                  width={8}
                  height={8}
                  className="rounded-full w-8 h-8"
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
            <Image
  src="/recievedpayments.svg"
  alt=""
  width={4}
  height={4}
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
                <h2 className="text-xl">New Customer</h2>
              </div>
            </div>

            <div className="pt-7 pl-16">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="text-[13px] text-white"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex space-x-20">
                      <p>Customer Type</p>
                      <div className="flex space-x-2">
                        <div className="flex space-x-2">
                          <input
                            name="Customer Type"
                            className="accent-secondary"
                            type="radio"
                          />
                          <p>Business</p>
                        </div>
                        <div className="flex space-x-2">
                          <input
                            name="Customer Type"
                            className="accent-secondary"
                            type="radio"
                          />
                          <p>Individual</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <p className="mr-[73px]">Primary Contact</p>
                      <div className="flex items-center gap-2">
                        <input
                          className="focus:outline-none text-black rounded-md w-32 h-8 text-xs p-2"
                          placeholder={currentCustomer?.salutaion as string}
                          type="text"
                        />
                        <input
                          className="focus:outline-none text-black rounded-md w-32 h-8 text-xs p-2"
                          placeholder={currentCustomer?.firstName as string}
                          type="text"
                        />
                        <input
                          className="focus:outline-none text-black rounded-md w-32 h-8 text-xs p-2"
                          placeholder={currentCustomer?.lastName as string}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-[72px]">
                      <p>Company Name</p>
                      <div className=" flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          placeholder={
                            currentCustomer?.customerCompanyName as string
                          }
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <p>
                        Customer Display Name
                        <span className="text-red-600">*</span>
                      </p>
                      <div>
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                          placeholder={currentCustomer?.displayName as string}
                        />
                      </div>
                    </div>
                    {/* <div>
                    <p>Currency</p>
                    <div>
                      <input type="text" />
                    </div>
                          
                  focus:outline-none  </div> */}

                    <div className="flex items-center gap-[77px]">
                      <p>Customer Email</p>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="email"
                          placeholder={currentCustomer?.email as string}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-[71px]">
                      <p>Customer Phone</p>
                      <div className=" flex justify-between w-80 h-8 gap-1">
                        <input
                          className="focus:outline-none rounded-md h-8 text-xs w-36 text-black p-2"
                          placeholder={
                            currentCustomer?.workPhone as unknown as string
                          }
                          type="tel"
                        />
                        <input
                          className="focus:outline-none rounded-md h-8 text-xs w-36 text-black p-2"
                          placeholder={
                            currentCustomer?.mobile as unknown as string
                          }
                          type="tel"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-20">
                    <div className="flex flex-col gap-4 mb-8 mt-9">
                      <h3 className="text-sm text-secondary">
                        Billing Address
                      </h3>
                      <div className="flex items-center gap-[120px]">
                        <p>Attention</p>
                        <div>
                          <input
                            className="focus:outline-none rounded-md h-8 text-xs w-64 text-black p-2"
                            placeholder=""
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-[69px]">
                        <p>Country / Region</p>
                        <div>
                          <input
                            className="focus:outline-none rounded-md h-8 text-xs w-64 text-black p-2"
                            placeholder=""
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex gap-[126px] ">
                        <p>Address</p>
                        <div className="flex flex-col gap-4">
                          <textarea
                            placeholder="street 1"
                            className="rounded-md  text-xs w-64 text-black p-2"
                          ></textarea>
                          <textarea
                            placeholder="street 2"
                            className="rounded-md  text-xs w-64 text-black p-2"
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex items-center gap-[152px]">
                        <p>City</p>
                        <div>
                          <input
                            className="focus:outline-none rounded-md h-8 text-xs w-64 text-black p-2"
                            placeholder=""
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-36">
                        <p>State</p>
                        <div>
                          <input
                            className="focus:outline-none rounded-md h-8 text-xs w-64 text-black p-2"
                            placeholder=""
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 mb-8 mt-9">
                      <div className="flex justify-between">
                        <h3 className="text-sm text-secondary">
                          Shipping Address
                        </h3>
                        <div className=" flex items-center text-secondary gap-2">
                          <PiCopySimple />
                          <p>Copy billing address</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-[120px]">
                        <p>Attention</p>
                        <div>
                          <input
                            className="focus:outline-none rounded-md h-8 text-xs w-64 text-black p-2"
                            placeholder=""
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-[69px]">
                        <p>Country / Region</p>
                        <div>
                          <input
                            className="focus:outline-none rounded-md h-8 text-xs w-64 text-black p-2"
                            placeholder=""
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex gap-[126px] ">
                        <p>Address</p>
                        <div className="flex flex-col gap-4">
                          <textarea
                            placeholder="street 1"
                            className="rounded-md  text-xs w-64 text-black p-2"
                          ></textarea>
                          <textarea
                            placeholder="street 2"
                            className="rounded-md  text-xs w-64 text-black p-2"
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex items-center gap-[152px]">
                        <p>City</p>
                        <div>
                          <input
                            className="focus:outline-none rounded-md h-8 text-xs w-64 text-black p-2"
                            placeholder=""
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-36">
                        <p>State</p>
                        <div>
                          <input
                            className="focus:outline-none rounded-md h-8 text-xs w-64 text-black p-2"
                            placeholder=""
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div></div>
                  </div>
                  <div className="flex gap-2 ml-3">
                    <button
                      className="bg-secondary py-2 px-3 rounded-md text-sm text-black"
                      type="submit"
                    >
                      Save
                    </button>
                    <button
                      className=" rounded-md bg-white py-2 px-3 text-sm text-black"
                      type="reset"
                    >
                      Cancel
                    </button>
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

export default EditCustomer;
