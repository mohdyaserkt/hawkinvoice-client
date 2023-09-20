import { AxiosError } from "axios";
import { getInvoices } from "@/app/api/invoice/getInvoices";
import { getAllExpenses } from "@/app/api/expense/getAllExpenses";

export const handleGetExpenses= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const expenses = await getAllExpenses();
    return Promise.resolve(expenses as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
