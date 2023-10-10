import { AxiosError } from "axios";
import { getExpenseDetails } from "@/app/api/report/getExpenseDetails";

export const handleGetExpenseDetails= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getExpenseDetails();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
