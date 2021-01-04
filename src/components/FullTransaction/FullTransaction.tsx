import React, { FunctionComponent } from "react";
import { ITransaction } from "../../interfaces/ITransaction";

interface IFullTransactionProps {
  transaction: ITransaction;
}

export const FullTransaction: FunctionComponent<IFullTransactionProps> = ({ transaction }) => {
  return (
    <div>
      <div>{"Type: " + transaction.type}</div>
      <div>{"Amount: " + transaction.amount}</div>
      <div>{"Id: " + transaction.id}</div>
      <div>{"EffectiveDate: " + transaction.effectiveDate}</div>
    </div>
  )
}
