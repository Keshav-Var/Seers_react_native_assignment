// services/transactionService.js
import axios from "axios";

const API_BASE_URL = "https://transaction.free.beeceptor.com";

export const getTransactionsFromAPI = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

export const postTransactionToAPI = async (transaction) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { status: "ok" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};
