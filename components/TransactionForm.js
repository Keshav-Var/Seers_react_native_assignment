// components/TransactionForm.js
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TransactionsContext } from "../context/TransactionContext";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TransactionForm({ onClose }) {
  const { addTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("credit");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false); // close after picking
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    return date.toLocaleDateString();
  };

  const handleSubmit = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill in all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type,
      category,
      date: date.toISOString(),
    };

    addTransaction(newTransaction);
    onClose(); // close the modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Type</Text>
      <Picker selectedValue={type} onValueChange={(val) => setType(val)}>
        <Picker.Item label="Credit" value="credit" />
        <Picker.Item label="Debit" value="debit" />
      </Picker>

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Enter category"
      />

      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateInput}
      >
        <Text>{formatDate(date)}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Button title="Add Transaction" onPress={handleSubmit} />
      <View style={{ marginTop: 10 }}>
        <Button title="Cancel" onPress={onClose} color="grey" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginTop: 10, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginTop: 4,
  },
  dateInput: {
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
});
