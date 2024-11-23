import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import api from "../Api";

type Payment = {
  _id: string;
  name: string;
};

export default function PaymentList() {
  const [Payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 
  
  useEffect(() => {
    api.get("/Payments")
      .then((response) => {
        if (response.data) {
          setPayments(response.data);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching Payments:", error);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Payments...</Text>
      </View>
    );
  }

  if (error || Payments.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No Payments available or an error occurred.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <FlatList
        data={Payments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  errorText: { fontSize: 16, color: "red", textAlign: "center" },
});
