import { AxiosError } from "axios";
import { getAllRecievables } from "@/app/api/home/getAllRecievables";

export const handleGetAllRecievables= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const allRecievables = await getAllRecievables();
    return Promise.resolve(allRecievables as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
