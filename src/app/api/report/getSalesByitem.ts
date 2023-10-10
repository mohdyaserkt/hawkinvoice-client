import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getSalesByItem= async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/invoice/report/get-salesbyitem`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
