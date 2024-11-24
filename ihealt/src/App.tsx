import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SpecialtieList from "./screens/Specialtie";
import RegisterUser from "./screens/Register";
import LoginUser from "./screens/Login";
import ClinicList from "./screens/Clinic";
import ConsultationList from "./screens/Consultation";
import PaymentList from "./screens/Payment";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./screens/Home/Home";
import { colors } from "./styles/colors";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						let iconName = "";

						if (route.name === "Specialties") {
							iconName = "list" as string;
						} else if (route.name === "Register") {
							iconName = "person-add" as string;
						} else if (route.name === "Login") {
							iconName = "log-in" as string;
						} else if (route.name === "Clinics") {
							iconName = "medkit" as string;
						} else if (route.name === "Consultations") {
							iconName = "calendar" as string;
						} else if (route.name === "Payments") {
							iconName = "card" as string;
						}

						return <Icon name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: colors.primary,
					tabBarInactiveTintColor: "gray",
				})}
			>
				<Tab.Screen
					name="Início"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Tab.Screen name="Specialties" component={SpecialtieList} />
				<Tab.Screen name="Register" component={RegisterUser} />
				<Tab.Screen name="Login" component={LoginUser} />
				<Tab.Screen name="Clinics" component={ClinicList} />
				<Tab.Screen name="Consultations" component={ConsultationList} />
				<Tab.Screen name="Payments" component={PaymentList} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
