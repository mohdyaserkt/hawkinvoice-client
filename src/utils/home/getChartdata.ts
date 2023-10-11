import { AxiosError } from "axios";
import { getChartData } from "@/app/api/home/getChartdata";

export const handleGetChartData= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getChartData();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
