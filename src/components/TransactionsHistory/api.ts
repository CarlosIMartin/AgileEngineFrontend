import axios, { AxiosResponse } from "axios";
import { ITransaction } from "../../interfaces/ITransaction"

const GET_TRANSACTIONS = "http://localhost:3000/account/history";

export const getTransactions = async (): Promise<ITransaction[]> => {
  try {
    const axiosResponse: AxiosResponse = await axios.get(
      GET_TRANSACTIONS);
    const transactions: ITransaction[] = axiosResponse.data;
    return transactions;
  } catch (err) {
    throw new Error(err);
  }
};
