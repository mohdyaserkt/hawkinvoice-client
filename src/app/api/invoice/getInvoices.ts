import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getInvoices = async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/invoice/get-invoices`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
