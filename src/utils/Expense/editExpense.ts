import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { editExpense } from "@/app/api/expense/editExpense";
import { IExpense, handleCreateExpense } from "../../../types/Expense/createNewExpense";

export const handleEditExpense = async ({
  expense,
setError
}: handleCreateExpense): Promise<string | boolean | AxiosError> => {
  
  

  try {
    const editedExpense= await editExpense(expense as IExpense);
    return Promise.resolve(editedExpense as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
