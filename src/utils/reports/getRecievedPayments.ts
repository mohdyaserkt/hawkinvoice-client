import { AxiosError } from "axios";
import { getRecievedPayments } from "@/app/api/report/getRecievedPayments";

export const handleGetRecievedPayments= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getRecievedPayments();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
