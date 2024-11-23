import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import api from "../Api";

export default function RegisterUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    type: "patient",
  });

  const handleRegister = () => {
    api.post("/users", formData)
      .then(() => Alert.alert("Success", "User registered"))
      .catch(() => Alert.alert("Error", "Failed to register user"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput placeholder="Name" style={styles.input} onChangeText={(text) => setFormData({ ...formData, name: text })} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" onChangeText={(text) => setFormData({ ...formData, email: text })} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={(text) => setFormData({ ...formData, password: text })} />
      <TextInput placeholder="Phone" style={styles.input} keyboardType="phone-pad" onChangeText={(text) => setFormData({ ...formData, phone: text })} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10 },
});
