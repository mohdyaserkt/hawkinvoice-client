import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getRecievedPayments= async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/invoice/report/get-recievedpayments`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
