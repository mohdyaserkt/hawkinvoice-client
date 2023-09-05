"use client"
import { handleGetMyOrganizations } from "@/utils/Organization/getMyOrganization";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ManageOrganisation = () => {
  const router = useRouter();
  const [myOrganizations, setmyOrganizations] = useState([]);
  useEffect(() => {
    handleGetMyOrganizations()
      .then(({data}:any) => {
        setmyOrganizations(data.tenants)
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  return (
    <div className="h-auto">
      <nav></nav>
      <div className="flex h-full   justify-center mt-56 ">
        <div className=" w-6/12">
          <div className="mb-6">
            <h1 className="text-white text-lg mb-3">Hi, User Name!</h1>
            <div className="relative">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 text-xs">
                    You are a part of the following organizations. Go to the
                    organization <br /> which you wish to access now.
                  </p>
                </div>
                <button onClick={()=>router.push("/addorganization")} className="absolute bottom-0 right-0 bg-secondary rounded w-36 h-8 px-3 text-xs">
                  + New Organization
                </button>
              </div>
            </div>
          </div>

         

          
          <div className="flex flex-col gap-3">

          
          {myOrganizations.map((item: any) => (
            <div key={item.id}>
            <div>
              <div className="flex w-full border-[1px] border-white rounded-lg p-6">
                <div className="w-2/12 h-32 mr-6 bg-white rounded flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3/5 h-3/5 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h1 className="text-base text-white">{item.businessName}</h1>
                    <div className="flex justify-center">
                    {/* <Link href={`http://${item.businessName}.hawkinvoice.com/customers`}> */}
                      <button onClick={()=>{localStorage.setItem("currentOrganization", JSON.stringify(item.id)); router.push('/customers')}} className=" border-[1px] border-blue-500 text-blue-500 text-xs p-2  rounded">
                        Go to Organization
                      </button>
                      {/* </Link> */}
                      <button className="bg-white border-2 rounded text-base ml-2 px-1  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-gray-400 text-xs">
                    <h3>Organization created on {item.createdDate}</h3>
                    <h3>Organization ID: {item.id}</h3>
                    <h3>Edition: India</h3>
                    <h3>You are an admin in this organization</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          
        ))}
</div>
          <div>
            <div>
              <div className="flex w-full border-[1px] border-white rounded-lg p-6">
                <div className="w-2/12 h-32 mr-6 bg-white rounded flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3/5 h-3/5 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h1 className="text-base text-white">FirstOrganisation</h1>
                    <div className="flex justify-center">
                      <button className=" border-[1px] border-blue-500 text-blue-500 text-xs p-2  rounded">
                        Go to Organization
                      </button>
                      <button className="bg-white border-2 rounded text-base ml-2 px-1  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-gray-400 text-xs">
                    <h3>Organization created on 24/07/2023</h3>
                    <h3>Organization ID: 60022809358</h3>
                    <h3>Edition: India</h3>
                    <h3>You are an admin in this organization</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrganisation;
