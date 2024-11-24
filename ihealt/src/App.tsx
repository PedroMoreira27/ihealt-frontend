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
				screenOptions={() => ({
					tabBarActiveTintColor: colors.primary,
					tabBarInactiveTintColor: colors.mutedForeground,
				})}
			>
				<Tab.Screen
					name="Início"
					component={Home}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size }) => (
							<Icon name="home" size={size} color={color} />
						),
					}}
				/>

				<Tab.Screen
					name="Clínicas"
					component={ClinicList}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="list" size={size} color={color} />
						),
						headerShown: false,
					}}
				/>

				<Tab.Screen
					name="Perfil"
					component={RegisterUser}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon name="person" size={size} color={color} />
						),
						headerShown: false,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
