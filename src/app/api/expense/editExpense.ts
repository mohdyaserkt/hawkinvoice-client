import { IExpense } from "../../../../types/Expense/createNewExpense";
import { IInvoice } from "../../../../types/invoice/createinvoice";
import axiosInstance from "../axios";

export const editExpense = async (expense:IExpense): Promise<IUser | Error> => {
  console.log("reachedin the api dedigxp ",expense);

  try {
    const response = await axiosInstance.post(`/api/invoice/expense/edit-expense`, expense);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
