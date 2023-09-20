import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { getCustomers } from "@/app/api/customers/getCustomers";
import { getInvoiceById } from "@/app/api/invoice/getInvoiceById";

export const handleGetInoviceById = async (id:string): Promise<
  string | boolean | AxiosError
> => {
  try {
    const customer = await getInvoiceById(id);
    return Promise.resolve(customer as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
