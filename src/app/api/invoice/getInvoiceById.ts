import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getInvoiceById = async (id:string): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/invoice/get-invoice/${id}`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
