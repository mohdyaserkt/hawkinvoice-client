import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getExpenseById = async (id:string): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/invoice/expense/get-expense/${id}`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
