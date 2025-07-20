// screens/TransactionsScreen.js
import React, { useContext, useState } from "react";
import { View, FlatList, Button, Modal, StyleSheet, Text } from "react-native";
import { TransactionsContext } from "../context/TransactionContext";
import TransactionItem from "../components/TransactionItem";
import TransactionForm from "../components/TransactionForm";

export default function TransactionsScreen() {
  const { transactions } = useContext(TransactionsContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Text style={{ fontSize: 16, color: "#888" }}>
              No transactions yet.
            </Text>
          </View>
        }
        contentContainerStyle={
          transactions.length === 0
            ? { flexGrow: 1 } // allow ListEmptyComponent to fill space
            : { paddingBottom: 100 }
        }
      />

      <Button title="+ Add Transaction" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide">
        <TransactionForm onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 25,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
});
