import React, { useState, useEffect } from "react";
import { transactionsInit, ITransaction } from "../../interfaces/ITransaction";
import { ListGroup } from "react-bootstrap";
import { getTransactions } from "./api";
import { FullTransaction } from "../FullTransaction/FullTransaction";
import { Transaction } from "../Transaction/Transaction";

export const TransactionsHistory = () => {
  const [transactionsList, setTransactionsList] = useState(transactionsInit);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ITransaction[] = await getTransactions();
        setTransactionsList(response);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <ListGroup>
        {transactionsList.map((transaction, index) => (
          <ListGroup.Item
            key={index}
            variant={transaction.type === "credit" ? "success" : "danger"}
            action={true}
            onClick={() => {
                if (transaction.isSelected === true) {
                  const testList = [...transactionsList];
                  testList[index].isSelected = false;             
                  setTransactionsList(testList);
                } else {
                  const testList = [...transactionsList];
                  testList[index].isSelected = true;             
                  setTransactionsList(testList);
                }
            }}
          >
            <div>
            {
              transaction.isSelected === true 
              ?
              ( <FullTransaction transaction={transaction} /> )
              :
              ( <Transaction transaction={transaction} /> )
            }
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
