import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getSalesByCustomer= async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/invoice/report/get-salesbycustomer`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
