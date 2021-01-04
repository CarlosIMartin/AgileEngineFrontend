import React, { FunctionComponent } from "react";
import { ITransaction } from "../../interfaces/ITransaction";

interface ITransactionProps {
  transaction: ITransaction;
}

export const Transaction: FunctionComponent<ITransactionProps> = ({ transaction }) => {
  return (
    <div>
      <div>{"Type: " + transaction.type}</div>
      <div>{"Amount: " + transaction.amount}</div>
    </div>
  )
}
