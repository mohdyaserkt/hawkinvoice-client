import { IInvoice } from "../../../../types/invoice/createinvoice";
import axiosInstance from "../axios";

export const editInvoice = async (invoice:IInvoice): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.post(`/api/invoice/edit-invoice`, invoice);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
