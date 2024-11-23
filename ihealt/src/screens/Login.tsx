import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Paragraph, RadioButton } from "react-native-paper";
import api from "../Api";
import { colors } from "../styles/colors";

export default function LoginUser() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    type: "patient",
  });

  const setFormType = (type: string) => {
    setFormData({ ...formData, type });
  };

  const handleLogin = () => {
    api.post("/login", formData)
      .then(() => Alert.alert("Success", "User Logged In"))
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.message : "Failed to Login user";
        Alert.alert("Error", errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Entre em sua conta</Text>
        <Text style={styles.paragraph}>Para utilizar de nossos serviços você precisa estar logado</Text>
      </View>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => setFormType(value)}
          value={formData.type}
        >
        <View style={styles.radioGroup}>  
          <View style={styles.radioButton}>
            <Text style={styles.radioText}>Patient</Text>
            <RadioButton value="patient" />
          </View>
          <View style={styles.radioButton}>
            <Text style={styles.radioText}>Doctor</Text>
            <RadioButton value="doctor" />
          </View>
        </View>
        </RadioButton.Group>
      </View>

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />

      <TextInput
        placeholder="Phone (optional)"
        style={styles.input}
        keyboardType="phone-pad"
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
      />

      <Button onPress={handleLogin}>
        <Text style={{ color: colors.colorOnPrimary }}>Login</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, display: "flex", justifyContent: "center", margin: "25%", marginTop: "20%" },
  textContainer: { display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  subTitle: { fontSize: 15, fontWeight: "bold", marginBottom: 10 },
  paragraph: { fontSize: 10, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 8 },
  radioContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  radioLabel: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radioText: {
    fontSize: 16,
    marginRight: 5,
  },
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 30,
  },
});

