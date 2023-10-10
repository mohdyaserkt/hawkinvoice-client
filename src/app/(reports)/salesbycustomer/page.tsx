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

import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlinePrinter,
  AiOutlineDownload,
} from "react-icons/ai";
import { handleGetSalesByCustomer } from "@/utils/reports/getSalesByCustomer";

const getStarted = () => {

  const [SalesByCustomer, setSalesByCustomer] = useState<any>([]);


  useEffect(() => {
    handleGetSalesByCustomer()
      .then(({data}:any) => { 
        setSalesByCustomer(data.salesByCustomerData)
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
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
            <div className="flex items-center h-7  rounded-lg space-x-2">
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
            <div className="flex items-center h-7 bg-secondary rounded-lg space-x-2">
              <BsFileEarmarkBarGraph className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Reports</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-24">
            <div className="p-5 flex justify-between w-full items-center ">
              <div className="text-white flex gap-2 items-center">
                <h2 className="text-[22px]">Sales by Customer</h2>
                <p className="text-xs text-secondary ">
                  (From 01/04/2023 To 31/03/2024)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1 border rounded-md text-secondary border-secondary p-1">
                  <p>Print</p>
                  <AiOutlinePrinter className="w-6 h-6 text-secondary " />
                </div>
                <div className="flex gap-1 border rounded-md text-secondary border-secondary p-1">
                  <p>Download</p>
                  <AiOutlineDownload className="w-6 h-6 text-secondary " />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-10  h-screen overflow-y-auto" style={{ maxHeight: "calc(100vh - 217px)" }}>
              <div className="w-full text-white flex justify-center ">
                <div className="text-center">
                  <h1 className="text-[17px] mb-1">organisation name</h1>
                  <h1 className="text-[22px]">Sales by Customer</h1>
                  <h1 className="text-[13px]">From 01/04/2023 To 31/03/2024</h1>
                </div>
              </div>

              <div className="w-full px-3">
                <table className="w-full border-t border-x border-white">
                  <thead className="bg-secondary text-xs font-normal">
                    <tr>
                      <th className="border-b border-white p-2 text-center">
                        Name
                      </th>
                      <th className="border-b border-white p-2 text-center">
                        Invoice Count
                      </th>
                      <th className="border-b border-white p-2 text-center">
                        Total Sales
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white text-sm">
                    {/* {myCustomers.map((item: any) => (
                <tr className="border-b border-white" key={item.id}>
                  <td className="p-2 text-center">{item.name}</td>
                  <td className="p-2 text-center">{item.description}</td>
                  <td className="p-2 text-center">₹ {item.sellingPrice}</td>
                  <td className="p-2 text-center">{item.unit}</td>
                  <Link href={`/edititem/${item.id}`}><td className="p-2 text-center">edit</td></Link>

                </tr>))}  */}
                {SalesByCustomer.map((item: any) => (
                    <tr key={item.customerId}className="border-b border-white">
                      <td className="p-2 text-center">{item.customerName}</td>
                      <td className="p-2 text-center">{item.invoiceCount}</td>
                      <td className="p-2 text-center">₹ {item.totalSales}</td>
                    </tr>
                   ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default getStarted;
