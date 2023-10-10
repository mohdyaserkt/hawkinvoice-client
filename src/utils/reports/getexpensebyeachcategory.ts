import { AxiosError } from "axios";
import { getExpenseByEachCategory } from "@/app/api/report/getexpensebyeachcategory";

export const handleGetExpenseByEachCategory= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getExpenseByEachCategory();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
