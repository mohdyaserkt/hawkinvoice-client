
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

import Link from "next/link";
import { handleGetItems } from "@/utils/items/getItems";


const GetStarted = () => {
 

 
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
        <div className="flex">
          <div className=" w-56 flex flex-col gap-3 py-3 px-2 border ">
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
            <div className="p-5 flex justify-between w-full">
              <div className="text-white">
                <h2 className="text-xl">All Invoices</h2>
              </div>

              <div className="flex space-x-2">
                <div className="text-xs bg-secondary flex items-center text-white font-semibold px-3 py-2  rounded">
                  <Link href='/createnewinvoice'><span className="mr-1">+</span> New</Link>
                </div>
                <div className="p-2 bg-white rounded">
                  <SlOptions className="w-4 h-4 text-gray-800 " />
                </div>
              </div>
            </div>
            <table className="w-full border-t border-white">
              <thead className="bg-secondary text-xs font-normal">
                <tr>
                  <th className="border-b border-white p-2 text-center">
                    DATE
                  </th>
                  <th className="border-b border-white p-2 text-center">
                  Invoice#
                  </th>
                  <th className="border-b border-white p-2 text-center">
                  Order Number
                  </th>
                  <th className="border-b border-white p-2 text-center">
                  Customer Name
                  </th>
                  <th className="border-b border-white p-2 text-center">
                  Status
                  </th>
                  <th className="border-b border-white p-2 text-center">
                  Due Date
                  </th>
                  <th className="border-b border-white p-2 text-center">
                  Amount
                  </th>
                  <th className="border-b border-white p-2 text-center">
                  Balance Due
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
                <tr className="border-b border-white">
                  <td className="p-2 text-center">25/07/2023</td>
                  <td className="p-2 text-center">INV-000003</td>
                  <td className="p-2 text-center">256</td>
                  <td className="p-2 text-center">Paid</td>
                  <td className="p-2 text-center">25/07/2023</td>
                  <td className="p-2 text-center">₹23,450.00</td>
                  <td className="p-2 text-center">₹0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
