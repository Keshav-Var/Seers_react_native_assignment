// components/TransactionItem.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TransactionItem({ transaction }) {
  const { title, amount, type, category, date } = transaction;

  const amountColor = type === "credit" ? "green" : "red";

  return (
    <View style={styles.itemContainer}>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <Text style={[styles.amount, { color: amountColor }]}>
        ₹{parseFloat(amount).toFixed(2)}
      </Text>
    </View>
  );
}

function formatDate(dateString) {
  const parsed = new Date(dateString);
  if (isNaN(parsed.getTime())) {
    return "Invalid Date";
  }
  return parsed.toDateString();
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 8,
  },
  details: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  category: {
    fontSize: 14,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
