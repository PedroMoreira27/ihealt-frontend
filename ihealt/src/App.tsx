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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Specialties") {
              iconName = "list";
            } else if (route.name === "Register") {
              iconName = "person-add";
            } else if (route.name === "Login") {
              iconName = "log-in";
            } else if (route.name === "Clinics") {
              iconName = "medkit";
            } else if (route.name === "Consultations") {
              iconName = "calendar";
            } else if (route.name === "Payments") {
              iconName = "card";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
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
