"use client";
import React, { useEffect, useState } from "react";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
  LiaShoppingBagSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { PiHandbag } from "react-icons/pi";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt, TbReportMoney } from "react-icons/tb";
import { BiCart } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import Link from "next/link";

const getStarted = () => {
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
                <img
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                  alt="Your Alt Text"
                  className="rounded-full w-8   h-8   "
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex" style={{ height: "calc(100vh - 47px)" }}>
          <div className=" w-56 flex flex-col gap-3 py-3 px-2 border ">
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <AiOutlineHome className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Home</p>
            </div>
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <AiOutlineUser className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Customers</p>
            </div>
            <div className="flex items-center h-7 bg-secondary rounded-lg space-x-2">
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
            <div className="p-5 flex justify-between w-full ">
              <div className="text-white">
                <h2 className="text-xl">All Reports</h2>
              </div>
            </div>

            <div className="w-full p-5">
              <div className="grid grid-cols-3 gap-16">
                <div className="text-white p-1 flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <BiCart className="w-6 h-6 ml-2 text-white " />
                    <h1 className="text-lg text-white">Sales</h1>
                  </div>
                  <div>
                    <ul>
                    <Link href={`/salesbycustomer`}><li className="flex gap-2 w-[230px] text-[13px] items-center border-b border-secondary  border-dashed p-2">
                        <CiStar className=" text-secondary w-6 h-6" />
                        Sales by Customer
                      </li></Link>
                      <Link href={`/salesbyitem`}><li className="flex gap-2 w-[230px]  text-[13px] items-center border-b border-secondary  border-dashed p-2">
                        <CiStar className=" text-secondary w-6 h-6" />
                        Sales by Item
                      </li></Link>
                    </ul>
                  </div>
                </div>

                <div className="text-white p-1 flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <BiCart className="w-6 h-6 ml-2 text-white " />
                    <h1 className="text-lg text-white">Receivables</h1>
                  </div>
                  <div>
                    <ul>
                      <Link href={`/invoicedetails`}><li className="flex gap-2 w-[230px] text-[13px] items-center border-b border-secondary  border-dashed p-2">
                        <CiStar className=" text-secondary w-6 h-6" />
                        Invoice Details
                      </li></Link>
                      <Link href={`/pendingsales`}> <li className="flex gap-2 w-[230px]  text-[13px] items-center border-b border-secondary  border-dashed p-2">
                        <CiStar className=" text-secondary w-6 h-6" />
                        Pending Sales
                      </li></Link>
                      
                    </ul>
                  </div>
                </div>

                <div className="text-white p-1 flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <MdOutlinePayment className="w-6 h-6 ml-2 text-white " />
                    <h1 className="text-lg text-white">Sales</h1>
                  </div>
                  <div>
                    <ul>
                    <Link href={`/recievedpayments`}><li className="flex gap-2 w-[230px] text-[13px] items-center border-b border-secondary  border-dashed p-2">
                        <CiStar className=" text-secondary w-6 h-6" />
                        Payments Received
                      </li></Link>
                    </ul>
                  </div>
                </div>

                <div className="text-white p-1 flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <LiaShoppingBagSolid className="w-6 h-6 ml-2 text-white " />
                    <h1 className="text-lg text-white">
                      Purchases and Expenses
                    </h1>
                  </div>
                  <div>
                    <ul>
                    <Link href={`/expensedetails`}><li className="flex gap-2 w-[230px] text-[13px] items-center border-b border-secondary  border-dashed p-2">
                        <CiStar className=" text-secondary w-6 h-6" />
                        Expense Details
                      </li></Link>
                      <Link href={`/expensedetailsbyeachcategory`}><li className="flex gap-2 w-[230px]  text-[13px] items-center border-b border-secondary  border-dashed p-2">
                        <CiStar className=" text-secondary w-6 h-6" />
                        Expenses by Category
                      </li></Link>
                      {/* <li className="flex gap-2 w-[230px]  text-[13px] items-center border-b border-secondary  border-dashed p-2">
                        <CiStar className=" text-secondary w-6 h-6" />
                        Mileage Expenses by Employee
                      </li> */}
                    </ul>
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

export default getStarted;
