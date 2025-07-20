// App.js
import React from "react";
import { TransactionsProvider } from "./context/TransactionContext";
import TransactionsScreen from "./screens/TransactionsScreen";

export default function App() {
  return (
    <TransactionsProvider>
      <TransactionsScreen />
    </TransactionsProvider>
  );
}
