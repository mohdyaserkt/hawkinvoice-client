import { AxiosError } from "axios";
import { getInvoiceDetails } from "@/app/api/report/getinvoiceDetails";

export const handleGetInvoiceDetails= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getInvoiceDetails();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
