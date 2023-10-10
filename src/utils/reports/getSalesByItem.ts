import { AxiosError } from "axios";
import { getSalesByItem } from "@/app/api/report/getSalesByitem";

export const handleGetSalesByItem= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getSalesByItem();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
