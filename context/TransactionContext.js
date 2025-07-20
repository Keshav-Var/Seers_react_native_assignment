// context/TransactionContext.js
import React, { createContext, useEffect, useState } from "react";
import {
  getTransactionsFromAPI,
  postTransactionToAPI,
} from "../services/transactionService";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Load dummy transactions on app start (API call only for simulation)
  useEffect(() => {
    async function fetchTransactions() {
      try {
        await getTransactionsFromAPI(); // simulate a call
        setTransactions([]); // no real data, so use empty or mock
      } catch (error) {
        console.error("Error loading transactions:", error);
      }
    }
    fetchTransactions();
  }, []);

  const addTransaction = async (transaction) => {
    try {
      await postTransactionToAPI(transaction); // simulate POST call
      const newTransaction = { ...transaction, id: Date.now().toString() }; // generate local id
      setTransactions((prev) => [newTransaction, ...prev]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
