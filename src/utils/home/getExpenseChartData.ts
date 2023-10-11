import { AxiosError } from "axios";
import { getExpenseChartData } from "@/app/api/home/getExpenseChartData";

export const handleGetExpenseChartData= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getExpenseChartData();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
