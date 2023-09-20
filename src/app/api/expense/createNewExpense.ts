import { IExpense } from "../../../../types/Expense/createNewExpense";
import { IInvoice } from "../../../../types/invoice/createinvoice";
import axiosInstance from "../axios";

export const createNewExpense = async (expense: IExpense): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.post(`/api/invoice/expense/create-expense`, expense);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
