"use client";
import { handleCreateNewOrganization } from "@/utils/Organization/createNewOrganization";
import HandleForm from "@/utils/handleFormState";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const GetStarted = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const [organizationState, setorganizationState] = HandleForm({
    businessName: "",
    typeOfbusiness: "",
    phoneNumber: "",
    NoOfemployes: "",
    annualRevenue: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zipCode: "",
  });

  console.log(organizationState);

  const handlegetStartedForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleCreateNewOrganization({
      setError,

      email: organizationState.email as string,
      businessName: organizationState.businessName as string,
      typeOfbusiness: organizationState.typeOfbusiness as string,
      phoneNumber: organizationState.phoneNumber as Number,
      NoOfemployes: organizationState.NoOfemployes as string,
      annualRevenue: organizationState.annualRevenue as string,
      organizationAddress: {
        address: organizationState.address,
        apt: organizationState.apt,
        city: organizationState.city,
        state: organizationState.state,
        zipCode: organizationState.zipCode,
      },
    })
      .then((res: any) => {
        if (res) {
          console.log(res);
          router?.push("/manageorganization");
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
        <form onSubmit={handlegetStartedForm}>
          <nav></nav>
          <div className="flex h-full justify-center my-24 ">
            <div className=" sm:w-11/12 md:w-9/12 lg:w-2/5 h-auto">
              <div className="text-white text-base">Let’s get started</div>
              <div className="mt-2 mb-4 flex justify-between">
                <h1 className="text-white text-3xl">
                  Tell us about your business
                </h1>
                <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-10 h-10"
                
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg></button>
              </div>
              <div className="mb-9">
                <p className="text-white sm:text-sm text-base">
                  Every business is unique. We want to hear about yours. If you
                  registered your business with IRS, make sure the information
                  you submit matches what is on your IRS documents.
                </p>
              </div>

              <div>
                <div className="flex flex-col gap-4">
                  <div className="relative h-16 w-full min-w-[200px]">
                    <select
                      className="peer h-full w-full rounded border px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all border-black bg-secondary"
                      name="typeOfbusiness"
                      id="typeOfbusiness"
                      value={organizationState.typeOfbusiness}
                      onChange={setorganizationState}
                      required
                    >
                      <option className="" value="" hidden>
                        What kind of business are you?
                      </option>
                      <option
                        value="Individual / Sole Proprietorship"
                        className="rounded bg-white text-black"
                      >
                        Individual / Sole Proprietorship
                      </option>
                      <option
                        value="Limited Liability Company (LLC)"
                        className="rounded bg-white text-black"
                      >
                        Limited Liability Company (LLC)
                      </option>
                      <option
                        value=" Private Company"
                        className="rounded bg-white text-black"
                      >
                        Private Company
                      </option>
                      <option
                        value="Public Company (Unlisted)"
                        className="rounded bg-white text-black"
                      >
                        Public Company (Unlisted)
                      </option>
                      <option
                        value="Charitable organization / Not-for-profit"
                        className="rounded bg-white text-black"
                      >
                        Charitable organization / Not-for-profit
                      </option>
                      <option
                        value="Partnership"
                        className="rounded bg-white text-black"
                      >
                        Partnership
                      </option>
                      <option
                        value="Other"
                        className="rounded bg-white text-black"
                      >
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full h-16 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none placeholder:text-black"
                      placeholder="What is your business name?"
                      name="businessName"
                      id="businessName"
                      value={organizationState.businessName}
                      onChange={setorganizationState}
                      required
                    />
                    <h3 className="text-gray-400 text-sm sm:text-xs mt-1 ">
                      Your business name is how we’ll identify you on emails,
                      receipts, and messages to customers.
                    </h3>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full h-16 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none placeholder:text-black"
                      placeholder="Preferred phone number"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={organizationState.phoneNumber}
                      onChange={setorganizationState}
                      required
                      pattern="[0-9]{10}" // Specify your pattern here
                      title="Please enter a 10-digit phone number"
                    />
                    <h3 className="text-gray-400 sm:text-xs text-sm mt-1">
                      We’ll use this number to call you if needed. We don’t sell
                      your information to third parties.
                    </h3>
                  </div>

                  <div className="relative h-16 w-full min-w-[200px]">
                    <select
                      className="peer h-full w-full rounded border px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all border-black bg-white"
                      name="NoOfemployes"
                      id="NoOfemployes"
                      value={organizationState.NoOfemployes}
                      onChange={setorganizationState}
                      required
                    >
                      <option className="" value="" hidden>
                        How many employees
                      </option>
                      <option
                        value="Just me"
                        className="rounded bg-white text-black"
                      >
                        Just me
                      </option>
                      <option
                        value="1-10 employees"
                        className="rounded bg-white text-black"
                      >
                        1-10 employees
                      </option>
                      <option
                        value="11-50 employees"
                        className="rounded bg-white text-black"
                      >
                        11-50 employees
                      </option>
                      <option
                        value="51-100 employees"
                        className="rounded bg-white text-black"
                      >
                        51-100 employees
                      </option>
                      <option
                        value="More than 100 employees"
                        className="rounded bg-white text-black"
                      >
                        More than 100 employees
                      </option>
                    </select>
                  </div>

                  <div className="relative h-16 w-full min-w-[200px]">
                    <select
                      className="peer h-full w-full rounded border px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all border-black bg-white"
                      name="annualRevenue"
                      id="annualRevenue"
                      value={organizationState.annualRevenue}
                      onChange={setorganizationState}
                      required
                    >
                      <option className="" value="" hidden>
                        Estimated annual revenue
                      </option>
                      <option
                        value="$0 – $10,000"
                        className="rounded bg-white text-black"
                      >
                        $0 – $10,000
                      </option>
                      <option
                        value=" $10,000 – $50,000"
                        className="rounded bg-white text-black"
                      >
                        $10,000 – $50,000
                      </option>
                      <option
                        value="$50,000 – $100,000"
                        className="rounded bg-white text-black"
                      >
                        $50,000 – $100,000
                      </option>
                      <option
                        value="$100,000 – $250,000"
                        className="rounded bg-white text-black"
                      >
                        $100,000 – $250,000
                      </option>
                      <option
                        value="$250,000 – $500,000"
                        className="rounded bg-white text-black"
                      >
                        $250,000 – $500,000
                      </option>
                      <option
                        value="$500,000 – $1M"
                        className="rounded bg-white text-black"
                      >
                        $500,000 – $1M
                      </option>
                      <option
                        value="$1M – $5M"
                        className="rounded bg-white text-black"
                      >
                        $1M – $5M
                      </option>
                      <option
                        value=" $5M – $10M"
                        className="rounded bg-white text-black"
                      >
                        $5M – $10M
                      </option>
                      <option
                        value=" $10M – $20M"
                        className="rounded bg-white text-black"
                      >
                        $10M – $20M
                      </option>
                      <option
                        value="$20M and above"
                        className="rounded bg-white text-black"
                      >
                        $20M and above
                      </option>
                    </select>
                  </div>
                </div>
                <div className="inline-flex items-center my-5">
                  <label
                    className="relative flex cursor-pointer  items-center rounded-full p-3"
                    data-ripple-dark="true"
                  >
                    <input
                      id="login"
                      checked={isChecked}
                      type="checkbox"
                      onChange={() => setIsChecked(!isChecked)}
                      className="before:content[''] peer relative sm:w-3 sm:h-3 md:h-5 md:w-5 cursor-pointer appearance-none rounded border-2 border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black  checked:bg-black checked:before:bg-black hover:before:opacity-10"
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
                  <label className="mt-px sm:hidden md:text-sm cursor-pointer select-none font-light text-white ">
                    I have a mobile business without a permanent physical
                    location
                  </label>
                  <label className="mt-px sm:text-xs md:text-sm cursor-pointer select-none font-light text-white ">
                    I run a mobile business without a permanent location.
                  </label>
                </div>

                <div
                  className={`  ${
                    isChecked ? "hidden" : "flex"
                  } flex-col gap-4 `}
                >
                  <div>
                    <input
                      type="text"
                      className="w-full h-16 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none placeholder:text-black"
                      placeholder="Address"
                      name="address"
                      id="address"
                      value={organizationState.address}
                      onChange={setorganizationState}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full h-16 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none "
                      placeholder="Apt, suite, etc. (Optional)"
                      name="apt"
                      id="apt"
                      value={organizationState.apt}
                      onChange={setorganizationState}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full h-16 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none placeholder:text-black"
                      placeholder="City"
                      name="city"
                      id="state"
                      value={organizationState.city}
                      onChange={setorganizationState}
                    />
                  </div>
                  <div className="w-full flex justify-between gap-4">
                    <div className="w-6/12 h-16">
                      <input
                        type="text"
                        className="w-full h-16 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none placeholder:text-black"
                        placeholder="State"
                        name="state"
                        id="state"
                        value={organizationState.state}
                        onChange={setorganizationState}
                      />
                    </div>
                    <div className="w-6/12 h-16">
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        className="w-full h-16 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none placeholder:text-black"
                        placeholder="Zip code"
                        value={organizationState.zipCode}
                        onChange={setorganizationState}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className=" bg-secondary rounded w-36 h-8 px-3 text-xs">
              submit
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default GetStarted;
