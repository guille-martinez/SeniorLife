import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Import navigation container
import { createStackNavigator } from "@react-navigation/stack"; // Import stack navigator
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import PersonalDataScreen from "./screens/PersonalDataScreen"
import MedicalRegisterScreen from "./screens/MedicalRegisterScreen"
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen"
import DashboardScreen from "./screens/DashboardScreen"
import VideoCallScreen from "./screens/VideoCallScreen"
import CallSimulationScreen from "./screens/CallSimulationScreen"
import MedicalTrackingScreen from "./screens/MedicalTrackingScreen"


const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Iniciar Sesión" component={LoginScreen} />
        <Stack.Screen name="Registro" component={SignupScreen} />
        <Stack.Screen name="Datos Personales" component={PersonalDataScreen} />
        <Stack.Screen name="Registro Médico" component={MedicalRegisterScreen} />
        <Stack.Screen name="Política de privacidad" component={PrivacyPolicyScreen} />
        <Stack.Screen
          name="Principal"
          component={DashboardScreen}
          options={{
            headerLeft: () => null, // Elimina el botón de retroceso
            gestureEnabled: false, // Desactiva la función de deslizar hacia atrás
          }}
        />
        <Stack.Screen name='Video Llamada' component={VideoCallScreen} />
        <Stack.Screen 
          name='Llamada' 
          component={CallSimulationScreen}
          options={{
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen 
          name='Monitor de Salud'
          component={MedicalTrackingScreen}
          options={{
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}