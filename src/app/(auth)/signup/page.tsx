"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import HandleForm from "@/utils/handleFormState";
import { useState } from "react";
import { handleSignup } from "@/utils/Authentication/handlesignup";
import { ApiError } from "next/dist/server/api-utils";


export default function Signup() {
  const router = useRouter();
  const [signupState, setSignupState] = HandleForm({ email: "", password: "" });
  console.log(signupState);
  const handleSignupForm=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log("dsfsd");
    

    handleSignup({
      setError,
      
      email: signupState.email as string,
      password: signupState.password as string,
    })
      .then((res) => {
       
        if (res) {
          console.log(res);
          router?.push("/login")
          alert(res)
        }
      })
      .catch((err: ApiError) => {
        console.log(err.message);
        alert(err)
        
      });
  }
  const [errors, setErrors] = useState<{ field: string; errors: string[] } | null>({ field: "", errors: [""] });
  const setError = (field: string, errorMessages: string[]) => setErrors({ field, errors: errorMessages });
  
  return (
    <>
    <form onSubmit={handleSignupForm}>
      <div className="w-screen h-screen ">
        <nav></nav>
        <div className="flex h-full justify-center items-center ">
          <div className="bg-white md:w-2/3 lg:w-1/3 lg:h-4/5 sm:w-full rounded sm:p-10  md:rounded-s-[5rem]  md:rounded-t-[5rem]  flex flex-col   items-center justify-center ">
            
            <div className="flex flex-col  items-center justify-center">
              <div className="text-2xl font-ligthbold">
                Signup up for hawkinvoice
              </div>
              <br />
              <button className="mt-8 border-2 border-black rounded-lg w-[22.375rem] h-[3rem] flex justify-center items-center">
                <div className="text-base inline-flex items-center gap-3">
                  <FcGoogle size={25} />
                  continue with Google
                </div>
              </button>
              <span className="text-gray-600 my-5">or</span>
            </div>
            <div></div>
            
            <div className="relative h-10  min-w-[200px]">
              <input
                className="rounded-lg w-[22.375rem] h-[3rem]  peer   border  border-black border-t-transparent bg-transparent px-3 py-2.5  text-sm  text-black outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="email"
                id="email"
                value={signupState.email}
                onChange={setSignupState}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-600">
                Email
              </label>
            </div>
            <div className=" relative h-10  min-w-[200px] mt-7">
              <input
                className="  rounded-lg w-[22.375rem] h-[3rem]  peer   border  border-black border-t-transparent bg-transparent px-3 py-2.5  text-sm  text-black outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="password"
                id="password"
                value={signupState.password}
                onChange={setSignupState}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-600">
                Password
              </label>
            </div>

            <div></div>
            <div className="inline-flex items-center my-5">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                data-ripple-dark="true"
              >
                <input
                  id="login"
                  type="checkbox"
                  className="before:content[''] peer relative sm:w-3 sm:h-3 md:h-5 md:w-5 cursor-pointer appearance-none rounded border-2 border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black  checked:bg-black checked:before:bg-black hover:before:opacity-10"
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
              <label className="mt-px sm:text-xs md:text-sm cursor-pointer select-none font-light text-gray-950">
                I agree to join swift invoice's mailing list
              </label>
            </div>

            <button  className="border-2 border-black rounded-lg w-[22.375rem] h-[3rem] bg-black text-white font-semibold">
              Create account
            </button>
           
            <div className="text-xs text-center text-gray-600 my-5">
              <span>
                By clicking "Create account" or "Continue with Google",
                <br /> you agree to the{" "}
                <span className="text-blue-600  cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </div>

            <div className="text-gray-700">
              already have an account?{" "}
              <a
                onClick={() => router?.push("/login")}
                className="text-blue-600  cursor-pointer"
              >
                Log in
              </a>
            </div>
            
          </div>
        </div>
      </div>
      </form>
    </>
  );
}
