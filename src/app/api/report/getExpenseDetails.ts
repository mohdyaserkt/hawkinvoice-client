import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getExpenseDetails= async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/invoice/report/get-expensedetails`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
