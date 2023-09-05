import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Verification = () => {
  return (
    <>
      <div className="w-screen h-screen ">
        <nav></nav>
        <div className="flex h-full justify-center items-center ">
          <div className="bg-white md:w-2/3 lg:w-1/3 lg:h-4/5 sm:w-full rounded sm:p-10  md:rounded-s-[5rem]  md:rounded-t-[5rem]  flex flex-col   items-center justify-center ">
            <div className="flex flex-col  items-center justify-center">
              <div className="mb-3">
                <Image
                  src="/checkYourInbox.svg"
                  alt="Logo"
                  width={184}
                  height={143}
                />
              </div>

              <div className="text-2xl font-semibold  mb-6">
                Check your inbox
              </div>
              <div className="text-sm text-center text-gray-900">
                Click on the link we sent to{" "}
                <span className="font-semibold">helo@123.ca</span> tofinish{" "}
                <br /> your account setup.
              </div>

              <button className="mt-8 border-2 border-black rounded-lg w-[22.375rem] h-[3rem] flex justify-center items-center">
                <div className=" font-semibold text-sm inline-flex items-center gap-3">
                  <FcGoogle size={20} />
                  Open Gmail
                </div>
              </button>
            </div>

            <div></div>

            <div className=" md:text-sm text-center text-gray-800 my-5">
              <span>
                No email in your inbox or spam folder?{" "}
                <span className="text-blue-600  cursor-pointer">
                  Let’s resend it
                </span>.
              </span>
            </div>

            <div className="text-gray-700 text-sm text-center">
            Wrong address? <a className="text-blue-600  cursor-pointer">Log out</a> to sign in with a different<br className="sm:hidden" /> email.{" "}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;














