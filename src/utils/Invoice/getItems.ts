import { AxiosError } from "axios";
import { getItemsforInvoice } from "@/app/api/invoice/getItems";

export const handleGetItemsForInvoice= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const customers = await getItemsforInvoice();
    return Promise.resolve(customers as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
