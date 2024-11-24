import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import api from "../Api";
import { ClinicCard } from "@/components/clinic-card";
import { colors } from "@/styles/colors";

type Clinic = {
	_id: string;
	name: string;
};

const clinicsData = [
	{
		id: "0",
		name: "Clinica 1",
		services: [
			{
				name: "Exame médico geral",
			},
		],
	},
	{
		id: "1",
		name: "Clinica 2",
		services: [
			{
				name: "Exame médico geral",
			},
		],
	},
	{
		id: "2",
		name: "Clinica 3",
		services: [
			{
				name: "Exame médico geral",
			},
		],
	},
	{
		id: "3",
		name: "Clinica 4",
		services: [
			{
				name: "Exame médico geral",
			},
		],
	},
	{
		id: "4",
		name: "Clinica 5",
		services: [
			{
				name: "Exame médico geral",
			},
		],
	},
];

export default function ClinicList() {
	// const [Clinics, setClinics] = useState<Clinic[]>([]);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(false);

	// useEffect(() => {
	// 	api
	// 		.get("/Clinics")
	// 		.then((response) => {
	// 			if (response.data) {
	// 				setClinics(response.data);
	// 			} else {
	// 				setError(true);
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching Clinics:", error);
	// 			setError(true);
	// 		})
	// 		.finally(() => setLoading(false));
	// }, []);

	// if (loading) {
	// 	return (
	// 		<View style={styles.loadingContainer}>
	// 			<ActivityIndicator size="large" color="#0000ff" />
	// 			<Text>Loading Clinics...</Text>
	// 		</View>
	// 	);
	// }

	// if (error || Clinics.length === 0) {
	// 	return (
	// 		<View style={styles.errorContainer}>
	// 			<Text style={styles.errorText}>
	// 				No Clinics available or an error occurred.
	// 			</Text>
	// 		</View>
	// 	);
	// }

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Clinics</Text>
			<FlatList
				data={clinicsData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ClinicCard name={item.name} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20, backgroundColor: colors.surface },
	title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
	item: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
	loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
	errorContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	errorText: { fontSize: 16, color: "red", textAlign: "center" },
});
