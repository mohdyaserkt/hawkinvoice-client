import { createNewInvoice } from "@/app/api/invoice/createNewInvoice";
import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { handleCreateInvoice } from "../../../types/invoice/createinvoice";


export const handleCreateNewInovice = async ({
  invoice,
setError,
}: handleCreateInvoice): Promise<string | boolean | AxiosError> => {
  
//   const user = JSON.parse(localStorage.getItem("user") as string);
//   const email = user.email
//   const userId = user.id

  

  try {
    const tenant = await createNewInvoice(invoice);
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
