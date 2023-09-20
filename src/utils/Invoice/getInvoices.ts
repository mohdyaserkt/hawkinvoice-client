import { AxiosError } from "axios";
import { getInvoices } from "@/app/api/invoice/getInvoices";

export const handleGetInvoices= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const invoices = await getInvoices();
    return Promise.resolve(invoices as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};


export const formatDate=(inputDate:Date)=>{
  const date = new Date(inputDate);
  
  // Extract year, month, and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  // Create the formatted date string
  const formattedDate = `${day}/${month}/${year}`;
  
  return formattedDate;
}

