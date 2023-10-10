import { AxiosError } from "axios";
import { getPendingSalesDetails } from "@/app/api/report/getpendingSalesDetails";

export const handleGetPendingSalesDetails= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getPendingSalesDetails();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
