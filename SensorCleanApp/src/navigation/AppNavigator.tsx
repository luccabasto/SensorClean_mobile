import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SensorDetailScreen from "../screens/SensorDetailScreen";
import SensorFormScreen from "../screens/SensorFormScreen";
import SensorListScreen from "../screens/SensorListScreen";


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Sensores: undefined;
  Detalhes: undefined;
  SensorFormScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sensores" component={SensorListScreen} />
        <Stack.Screen name="Detalhes" component={SensorDetailScreen} />
        <Stack.Screen name="SensorFormScreen" component={SensorFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
