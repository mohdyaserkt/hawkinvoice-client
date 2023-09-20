import { getCustomersforinvoice } from "@/app/api/invoice/getCustomers";
import { AxiosError } from "axios";
export const handleGetCustomersforinvoice = async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const customers = await getCustomersforinvoice();
    return Promise.resolve(customers as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
