"use client";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { PiHandbag } from "react-icons/pi";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

import { IoMailOutline } from "react-icons/io5";

import Link from "next/link";
import { handleGetItems } from "@/utils/items/getItems";
import { useEffect, useRef, useState } from "react";
import { formatDate, handleGetInvoices } from "@/utils/Invoice/getInvoices";
import { IInvoice } from "../../../../../types/invoice/createinvoice";
import DueDateComponent from "@/components/invoice/allInvoices/dueDateComponent";
import { useParams } from "next/navigation";
import { handleGetInoviceById } from "@/utils/Invoice/getInvoiceById";
import Image from "next/image";

const GetStarted = () => {
  const [myInvoices, setmyInvoices] = useState([]);
  const [mainInvoice, setmainInvoice] = useState<IInvoice>();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    GetInvoices();
    getMainInvoice(id as string);
  }, [id]);

  console.log(mainInvoice, "thisis main");

  const getMainInvoice = (id: string) => {
    handleGetInoviceById(id)
      .then(({ data }: any) => {
        setmainInvoice(data.invoice as IInvoice);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  const GetInvoices = () => {
    handleGetInvoices()
      .then(({ data }: any) => {
        setmyInvoices(data.invoices);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const printableRef = useRef<HTMLDivElement | null>(null);

  const printDiv = () => {
    const content = printableRef.current;

    if (content) {
      const printWindow = window.open("", "", "width=600,height=600");

      // Write the content of the target div into the new window
      printWindow?.document.open();
      printWindow?.document.write(`
        <html>
          <head>
            <title>Print</title>
          </head>
          <body>
            ${content.innerHTML}
          </body>
        </html>
      `);
      printWindow?.document.close();

      // Trigger the print operation in the new window
      printWindow?.print();
      // printWindow?.onafterprint = function () {
      //   printWindow?.close(); // Close the new window after printing
      // };
    }
  };
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
              <select className="bg-blue-900 text-white focus:outline-none focus:ring focus:border-blue-300">
                <option className="bg-blue-900">Organization</option>
                <option className="bg-blue-900">Organization 2</option>
                <option className="bg-blue-900">Organization 3</option>
              </select>

              <div className="pr-2">
                <Image
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                  alt="Your Alt Text"
                  className="rounded-full w-8   h-8   "
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex">
          <div
            style={{ height: "calc(100vh - 47px)" }}
            className=" w-56 flex flex-col gap-3 py-3 px-2 border "
          >
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <AiOutlineHome className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Home</p>
            </div>
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <AiOutlineUser className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Customers</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <PiHandbag className="w-4 h-4 ml-2 text-white " />
              <p className="text-sm text-white">Items</p>
            </div>
            <div className="flex items-center h-7  bg-secondary rounded-lg space-x-2">
              <LiaFileInvoiceSolid className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Invoices</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <Image
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
            {/* <div className="p-5 flex justify-between w-full">   
              <div className="text-white">
                <h2 className="text-xl">All Invoices</h2>
              </div>

              <div className="flex space-x-2">
                <div className="text-xs bg-secondary flex items-center text-white font-semibold px-3 py-2  rounded">
                  <Link href="/createnewinvoice">
                    <span className="mr-1">+</span> New
                  </Link>
                </div>
                <div className="p-2 bg-white rounded">
                  <SlOptions className="w-4 h-4 text-gray-800 " />
                </div>
              </div>
            </div> */}

            <div className="flex">
              <div
                style={{ height: "calc(100vh - 47px)" }}
                className="w-[415px] border-e border-b  "
              >
                <div className="flex justify-between items-center p-4  border-b h-[71px]">
                  <div className="text-white">
                    <h2 className="text-base">All Invoices</h2>
                  </div>

                  <div className="flex space-x-2">
                    <div className="text-xs bg-secondary flex items-center text-white font-semibold px-3 py-2 h-8  rounded">
                      <Link href="/createnewinvoice">
                        <span className="mr-1">+</span> New
                      </Link>
                    </div>
                    <div className="p-2 bg-white rounded  h-8 ">
                      <SlOptions className="w-4 h-4 text-gray-800 " />
                    </div>
                  </div>
                </div>
                <div>
                  {myInvoices.map((item: IInvoice, index) => (
                    <div key={index}>
                      <div className="flex h-16 py-2 pe-1 ps-2 border-b">
                        <div>
                          <input type="checkbox" className="mx-2" />
                        </div>
                        <div className="flex justify-between w-full ">
                          <div className="  flex flex-col justify-center text-white">
                            <div className="flex flex-col ">
                              <Link href={`/allinvoices/${item.id}`}>
                                <h3 className="text-sm">{item.customerName}</h3>
                              </Link>
                              <div className="flex gap-2 text-[13px] items-center">
                                <p className="">{item.invoiceNumber}</p>
                                <p>|</p>
                                <p className="text-secondary">
                                  {formatDate(item.invoiceDate)}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className=" flex flex-col justify-center ">
                            <div>
                              <div className="text-end">
                                <h2 className="text-sm text-white">
                                  {item.Total}.00
                                </h2>
                              </div>
                              <div className="flex gap-2 text-[13px] items-center text-white">
                                <DueDateComponent dueDate={item.dueDate} />
                                <IoMailOutline className="text-secondary" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div ref={printableRef} className="w-full">
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                  <div className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Invoice
                      </h2>
                    </div>

                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        href="#"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                        Invoice PDF
                      </a>
                      <a
                        onClick={printDiv}
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        href="#"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                          <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                        </svg>
                        Print
                      </a>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <div className="grid space-y-3">
                        <dl className="grid sm:flex gap-x-3 text-sm">
                          <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                            Billed to:
                          </dt>
                          <dd className="text-gray-800 dark:text-gray-200">
                            <a
                              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                              href="#"
                            >
                              {mainInvoice?.customerName}
                            </a>
                          </dd>
                        </dl>

                        <dl className="grid sm:flex gap-x-3 text-sm">
                          <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                            Billing details:
                          </dt>
                          <dd className="font-medium text-gray-800 dark:text-gray-200">
                            <span className="block font-semibold">
                              Sara Williams
                            </span>
                            <address className="not-italic font-normal">
                              280 Suzanne Throughway,
                              <br />
                              Breannabury, OR 45801,
                              <br />
                              United States
                              <br />
                            </address>
                          </dd>
                        </dl>

                        <dl className="grid sm:flex gap-x-3 text-sm">
                          <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                            Shipping details:
                          </dt>
                          <dd className="font-medium text-gray-800 dark:text-gray-200">
                            <span className="block font-semibold">
                              Sara Williams
                            </span>
                            <address className="not-italic font-normal">
                              280 Suzanne Throughway,
                              <br />
                              Breannabury, OR 45801,
                              <br />
                              United States
                              <br />
                            </address>
                          </dd>
                        </dl>
                      </div>
                    </div>

                    <div>
                      <div className="grid space-y-3">
                        <dl className="grid sm:flex gap-x-3 text-sm">
                          <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                            Invoice number:
                          </dt>
                          <dd className="font-medium text-gray-800 dark:text-gray-200">
                            {mainInvoice?.invoiceNumber}
                          </dd>
                        </dl>

                        <dl className="grid sm:flex gap-x-3 text-sm">
                          <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                            Currency:
                          </dt>
                          <dd className="font-medium text-gray-800 dark:text-gray-200">
                            INR - INDIAN RUPEE
                          </dd>
                        </dl>

                        <dl className="grid sm:flex gap-x-3 text-sm">
                          <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                            Due date:
                          </dt>
                          <dd className="font-medium text-gray-800 dark:text-gray-200">
                            {formatDate(
                              mainInvoice?.dueDate
                                ? mainInvoice.dueDate
                                : new Date()
                            )}
                          </dd>
                        </dl>

                        <dl className="grid sm:flex gap-x-3 text-sm">
                          <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                            Billing method:
                          </dt>
                          <dd className="font-medium text-gray-800 dark:text-gray-200">
                            Send invoice
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                    <div className="hidden sm:grid sm:grid-cols-5">
                      <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                        Item
                      </div>
                      <div className="text-left text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </div>
                      <div className="text-left text-xs font-medium text-gray-500 uppercase">
                        Rate
                      </div>
                      <div className="text-right text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </div>
                    </div>

                    <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                    {mainInvoice?.itemDetails.map((item, index) => (
                      <>
                        <div
                          key={item.id}
                          className="grid grid-cols-3 sm:grid-cols-5 gap-2"
                        >
                          <div className="col-span-full sm:col-span-2">
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                              Item
                            </h5>
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                              {item.itemName}
                            </p>
                          </div>
                          <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                              Qty
                            </h5>
                            <p className="text-gray-800 dark:text-gray-200">
                              {item.quantity}
                            </p>
                          </div>
                          <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                              Rate
                            </h5>
                            <p className="text-gray-800 dark:text-gray-200">
                              {item.rate}
                            </p>
                          </div>
                          <div>
                            <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                              Amount
                            </h5>
                            <p className="sm:text-right text-gray-800 dark:text-gray-200">
                              {item.quantity * item.rate}
                            </p>
                          </div>
                        </div>
                        <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>
                      </>
                    ))}
                  </div>

                  <div className="mt-8 flex sm:justify-end">
                    <div className="w-full max-w-2xl sm:text-right space-y-2">
                      <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                          <dt className="col-span-3 text-gray-500">Subotal:</dt>
                          <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                            ₹{mainInvoice?.subTotal}
                          </dd>
                        </dl>

                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                          <dt className="col-span-3 text-gray-500">Total:</dt>
                          <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                            ₹{mainInvoice?.Total}
                          </dd>
                        </dl>

                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                          <dt className="col-span-3 text-gray-500">
                            Amount paid:
                          </dt>
                          <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                            ₹
                            {mainInvoice?.status == "paid"
                              ? mainInvoice?.Total
                              : 0.0}
                          </dd>
                        </dl>

                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                          <dt className="col-span-3 text-gray-500">
                            Due balance:
                          </dt>
                          <dd className="col-span-2 font-medium text-gray-800 dark:text-gray-200">
                            ₹
                            {mainInvoice?.status == "paid"
                              ? 0
                              : mainInvoice?.Total}
                            .00
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div
              
                className="w-full overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 47px)" }}
              >
                 <div className="flex justify-end items-center p-4  border-b h-[71px]">
                  <div className="flex space-x-2">
                    <div className="text-xs  flex items-center  px-3 py-2 h-8  gap-3">
                      <a
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        href="#"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                        Invoice PDF
                      </a>
                      <a
                        onClick={printDiv}
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        href="#"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                          <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                        </svg>
                        Print
                      </a>
                    </div>
                    <div className="p-2 bg-white rounded  h-8 ">
                      <SlOptions className="w-4 h-4 text-gray-800 " />
                    </div>
                  </div>
                </div>
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10 flex justify-center items-center">
                  <div ref={printableRef} className="bg-white rounded-xl w-[1035px] text-gray-900 p-8">
                    <div className="flex justify-between border-b">
                      <div className="mb-6">
                        <div className="flex items-center">
                          <Image
                            className="rounded-xl"
                            width={80}
                            height={80}
                            src={
                              "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg"
                            }
                            alt={"logo"}
                          ></Image>
                          <h2 className="text-2xl">Organisation Name</h2>
                        </div>
                        <div className="text-[15px]">
                          <p>Office 149, 450 South Brand Brooklyn</p>
                          <p>San Diego County, CA 91905, USA</p>
                          <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <h1 className="font-semibold text-[22px]">
                          Invoice #{mainInvoice?.invoiceNumber}
                        </h1>
                        <div className="flex flex-col  text-[15px]">
                          <p>
                            Date Issues:
                            {formatDate(
                              mainInvoice?.invoiceDate
                                ? mainInvoice.invoiceDate
                                : new Date()
                            )}
                          </p>
                          <p>
                            Date Due:{" "}
                            {formatDate(
                              mainInvoice?.dueDate
                                ? mainInvoice.dueDate
                                : new Date()
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-60 my-8">
                      <div className="flex flex-col gap-3">
                        <div>
                          <h1 className="text-[15px]">Invoice To:</h1>
                        </div>
                        <div className="text-sm flex flex-col gap-1">
                          <p>{mainInvoice?.customerName}</p>
                          <p>Shelby Company Limited</p>
                          <p>Small Heath, B10 0HF, UK</p>
                          <p>718-986-6062</p>
                          <p>{mainInvoice?.customerEmail}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div>
                          <h1 className="text-[15px]">Bill To:</h1>
                        </div>
                        <div className="text-sm flex gap-5">
                          <div className="flex flex-col gap-1">
                            <p>Total Due:</p>
                            {/* <p>Bank name:</p>
                            <p>Country:</p>
                            <p>IBAN:</p>
                            <p>SWIFT code:</p> */}
                          </div>
                          <div className="flex flex-col gap-1">
                            <p>
                              ₹
                              {mainInvoice?.status == "paid"
                                ? 0
                                : mainInvoice?.Total}
                              .00
                            </p>
                            {/* <p>American Bank</p>
                            <p>United States</p>
                            <p>ETD95476213874685</p>
                            <p>BR91905</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <table className="min-w-full">
                        <thead className="text-xs">
                          <tr>
                            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              ITEM
                            </th>
                            {/* <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              DESCRIPTION
                            </th> */}
                            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              COST
                            </th>
                            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              QTY
                            </th>
                            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              PRICE
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white text-[15px]">
                          {mainInvoice?.itemDetails.map((item, index) => (
                            <tr key={item.id}>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {item.itemName}
                              </td>
                              {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              HTML Admin Template
                            </td> */}
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                ₹{item.rate}
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                {item.quantity}
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                ₹{item.quantity * item.rate}
                              </td>
                            </tr>
                          ))}
                          {/* <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              Frest Admin Template
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              Angular Admin Template
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              $22
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              1
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              $22.00
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              Apex Admin Template
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              HTML Admin Template
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              $17
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              2
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              $34.00
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              Robust Admin Template
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              React Admin Template
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              $66
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              1
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              $66.00
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex justify-between my-8 ">
                      <div className="text-[15px] flex flex-col gap-2">
                        <div className="flex gap-1">
                          <p>Salesperson:</p>
                          <p>{mainInvoice?.salesPerson}</p>
                        </div>
                        <div>
                          <p>{mainInvoice?.customerNotes}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-10 mr-[51px]">
                        <div className="flex flex-col gap-2 text-sm">
                          <p>Subtotal:</p>
                          <p>Discount:</p>
                          {/* <p>Tax:</p> */}
                          <p>Total:</p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm">
                          <p> ₹{mainInvoice?.subTotal}</p>
                          <p>₹{mainInvoice?.discount}</p>
                          {/* <p>$50.00</p> */}
                          <p>₹{mainInvoice?.Total}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t items-center ">
                      <div className="flex gap-1  items-center mt-8 ">
                        <p className="text-base">Note:</p>
                        <p className="text-[14px]">
                          ₹{mainInvoice?.termsAndConditions}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
