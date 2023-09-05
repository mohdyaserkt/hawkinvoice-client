"use client";
import { handleCreateNewOrganization } from "@/utils/Organization/createNewOrganization";
import HandleForm from "@/utils/handleFormState";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";

const AddOrganization = () => {
  const [organizationState, setorganizationState] = HandleForm({
    businessName: "",
    typeOfbusiness: "",
  });

  console.log(organizationState);
  const router = useRouter();

  const handleCreateNewOrganizationForm = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    handleCreateNewOrganization({
      setError,

      businessName: organizationState.businessName as string,
      typeOfbusiness: organizationState.typeOfbusiness as string,
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
    <><form onSubmit={handleCreateNewOrganizationForm}>
      <div className="h-screen">
        <nav></nav>
        <div className="flex h-full justify-center items-center ">
          <div className=" border-white border-[1px] w-3/6 h-3/5 rounded-3xl">
            <div className="w-full h-1/6 bg-secondary flex items-center rounded-t-3xl">
              <div className="flex gap-1 ml-10 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 className="text-black font-semibold text-xl ">
                    Logo - Organization Setup
                  </h1>
                </div>
              </div>
            </div>

            <div className=" p-10 flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-xl text-white">
                  Welcome aboard, User Name!
                </h1>
                <p className="text-xs text-gray-400 ">
                  Enter your organization details to get started with brand name{" "}
                  <br />
                  Invoice.
                </p>
              </div>
              <div>
                <div className="flex flex-col gap-5 mb-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-secondary">
                      Organization Name<span className="text-red-600">*</span>
                    </p>
                    <input
                      className="border border-[#D7D5E2]  h-9 rounded-md w-full outline-none focus:border-none focus:ring-0 pl-2"
                      type="text"
                      name="businessName"
                      id="businessName"
                      value={organizationState.businessName}
                      onChange={setorganizationState}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-white">typeOfbusiness</p>
                    <input
                      className="border border-[#D7D5E2]  h-9 rounded-md w-full outline-none focus:border-none focus:ring-0 pl-2"
                      type="text"
                      name="typeOfbusiness"
                      id="typeOfbusiness"
                      value={organizationState.typeOfbusiness}
                      onChange={setorganizationState}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#408DFB"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#143230"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h3 className="text-white text-xs">
                    Add Organization Address
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-xs">Note:</h3>
                <p className="text-gray-400 text-xs pl-5">
                  You can update some of these preferences from Settings
                  anytime.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="text-xs border  rounded-md border-secondary text-secondary w-36 p-2">
                  Get Started
                </button>
                <button className="text-xs border  rounded-md border-red-700 text-red-700 w-16 py-2 p-2">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default AddOrganization;
