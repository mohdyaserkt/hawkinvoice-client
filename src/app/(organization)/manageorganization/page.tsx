import Image from "next/image";
import React from "react";

const manageOrganisation = () => {
  return (
    <div className="h-screen">
      <nav></nav>
      <div className="flex h-full   justify-center items-center ">
        <div className="bg-slate-600 w-6/12">
          <div>
            <h1 className="text-white text-lg mb-3">Hi, User Name!</h1>
            <div className="relative">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 text-sm">
                    You are a part of the following organizations. Go to the
                    organization <br /> which you wish to access now.
                  </p>
                </div>
                <button className="absolute bottom-0 right-0 bg-secondary rounded w-36 h-8 px-3 text-xs">
                  + New Organization
                </button>
              </div>
            </div>
          </div>

          {/* #organization listing */}

          <div>
            <div>
              <div className="flex w-full bg-green-600 p">
                <div className="w-2/12 h-32 mr-6 bg-black">
                  {/* <Image
                    src="/checkYourInbox.svg"
                    alt="Logo"
                    width={184}
                    height={143}
                  /> */}
                </div>
                <div className="w-full">
                  <div className="flex justify-between bg-green-300">
                    <h1 className="text-base">FirstOrganisation</h1>
                    <div>
                      <button>Go to Organization</button>
                      <button>...</button>
                    </div>
                  </div>
                  <div className="text-xs">
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

export default manageOrganisation;
