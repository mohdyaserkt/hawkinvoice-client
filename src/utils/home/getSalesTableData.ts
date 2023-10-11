import { AxiosError } from "axios";
import { getSalesTableData } from "@/app/api/home/getSalesTableData";

export const handleGetSalesTableData= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getSalesTableData();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
