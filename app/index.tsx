import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Import navigation container
import { createStackNavigator } from "@react-navigation/stack"; // Import stack navigator
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen"; // Import LoginScreen
import SignupScreen from "./screens/SignupScreen"; // Import SignupScreen

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

