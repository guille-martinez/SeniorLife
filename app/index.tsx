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
import DashboardSignUpScreen from "./screens/DashboardSignUpScreen"
import VideoCallScreen from "./screens/VideoCallScreen"
import CallSimulationScreen from "./screens/CallSimulationScreen"
import MedicalTrackingScreen from "./screens/MedicalTrackingScreen"
import SocialGroupsScreen from "./screens/SocialGroupsScreen"
import ChatScreen from "./screens/ChatScreen"
import RemindersScreen from "./screens/RemindersScreen"
import SeeRemindersScreen from "./screens/SeeRemindersScreen"
import AddRemindersScreen from "./screens/AddRemindersScreen"
import EmergencyScreen from "./screens/EmergencyScreen"
import EmergencyContactsScreen from "./screens/EmergencyContactsScreen"
import StepsHourlyScreen from "./screens/StepsHourlyScreen"
import HeartRateHourlyScreen from "./screens/HeartRateHourlyScreen"
import OxygenLevelHourlyScreen from "./screens/OxygenLevelHourlyScreen"
import SleepQualityHoursScreen from "./screens/SleepQualityHoursScreen"
import DoctorAppointment from "./screens/DoctorAppointment"



const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Iniciar Sesión" component={LoginScreen} />
        <Stack.Screen name="Registro" component={SignupScreen} />
        <Stack.Screen name="Datos de Contacto" component={PersonalDataScreen} />
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
        <Stack.Screen
          name="Principal "
          component={DashboardSignUpScreen}
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
        <Stack.Screen name='Grupos Sociales' component={SocialGroupsScreen} />
        <Stack.Screen name='Chat'component={ChatScreen} />
        <Stack.Screen name='Recordatorios' component={RemindersScreen}  />
        <Stack.Screen name="Ver Recordatorios" component={SeeRemindersScreen} />
        <Stack.Screen name="Añadir Recordatorio" component={AddRemindersScreen} />
        <Stack.Screen name='Monitor de Salud' component={MedicalTrackingScreen} />
        <Stack.Screen 
          name='Emergencia' 
          component={EmergencyScreen}
          options={{
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="Contactos de emergencia" component={EmergencyContactsScreen} />
        <Stack.Screen name="Pasos Diarios" component={StepsHourlyScreen} />
        <Stack.Screen name="Frecuencia Cardíaca" component={HeartRateHourlyScreen} />
        <Stack.Screen name="Nível de Oxígeno" component={OxygenLevelHourlyScreen} />
        <Stack.Screen name="Calidad de Sueño" component={SleepQualityHoursScreen} />
        <Stack.Screen name="Cita Médica" component={DoctorAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}