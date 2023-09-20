import { createNewInvoice } from "@/app/api/invoice/createNewInvoice";
import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { handleCreateInvoice } from "../../../types/invoice/createinvoice";
import { handleCreateExpense } from "../../../types/Expense/createNewExpense";
import { createNewExpense } from "@/app/api/expense/createNewExpense";


export const handleCreateNewExpense = async ({
  expense,
setError,
}: handleCreateExpense): Promise<string | boolean | AxiosError> => {
  
//   const user = JSON.parse(localStorage.getItem("user") as string);
//   const email = user.email
//   const userId = user.id

  

  try {
    const newexpense = await createNewExpense(expense);
    return Promise.resolve(newexpense as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
