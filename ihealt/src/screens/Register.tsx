import React, { useState } from "react";
import { Alert } from "react-native";
import api from "../Api";
import styled from "styled-components/native";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";

const Container = styled.SafeAreaView`
  background-color: ${colors.surface};
  padding: 16px 24px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.Text`
  font-size: 28px;
  font-weight: 700;
  text-align: center;

`;

const Description = styled.Text`
  margin: 8px 0px;
  color: ${colors.mutedForeground};
  text-align: center;
`;

const TextInput = styled.TextInput`
  border-width: 1px;
  border-color: ${colors.outline};
  border-radius: 12px;
`;

const FormContainer = styled.View`
  gap: 12px
`;

export default function RegisterUser() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		type: "patient",
	});

	const handleRegister = () => {
		api
			.post("/users", formData)
			.then(() => Alert.alert("Success", "User registered"))
			.catch(() => Alert.alert("Error", "Failed to register user"));
	};

	return (
		<Container>
			<Heading>Comece a utilizar nossos serviços!</Heading>
			<Description>
				Crie uma conta pra começar a usar nossos serviços, ou entre em uma
				existente!
			</Description>
			<FormContainer>
				<TextInput
					placeholder="Name"
					onChangeText={(text) => setFormData({ ...formData, name: text })}
				/>
				<TextInput
					placeholder="Email"
					keyboardType="email-address"
					onChangeText={(text) => setFormData({ ...formData, email: text })}
				/>
				<TextInput
					placeholder="Password"
					secureTextEntry
					onChangeText={(text) => setFormData({ ...formData, password: text })}
				/>
				<TextInput
					placeholder="Phone"
					keyboardType="phone-pad"
					onChangeText={(text) => setFormData({ ...formData, phone: text })}
				/>
				<Button
					props={{
						onPress: handleRegister,
					}}
				>
					Cadastrar-se
				</Button>
			</FormContainer>
		</Container>
	);
}
