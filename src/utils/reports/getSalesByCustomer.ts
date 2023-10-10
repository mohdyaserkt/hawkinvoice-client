import { AxiosError } from "axios";
import { getSalesByCustomer } from "@/app/api/report/getSalesByCustomer";

export const handleGetSalesByCustomer= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getSalesByCustomer();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
