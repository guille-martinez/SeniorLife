import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function SignUpScreen({ navigation }) {
  const [completedSteps, setCompletedSteps] = useState({
    personalData: false,
    medicalRegistration: false,
    privacyPolicy: false,
  });

  const allStepsCompleted =
    completedSteps.personalData &&
    completedSteps.medicalRegistration &&
    completedSteps.privacyPolicy;

  const handleStepCompletion = (step) => {
    setCompletedSteps((prev) => ({ ...prev, [step]: true }));
  };

  const handleContinue = () => {
    if (allStepsCompleted) {
      navigation.navigate("Principal"); // Replace with the actual next screen name
    } else {
      Alert.alert(
        "Pasos Incompletos",
        "Por favor, complete todos los pasos antes de continuar."
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Personal Data */}
      <TouchableOpacity
        style={[
          styles.box,
          completedSteps.personalData ? styles.completedBox : null,
        ]}
        onPress={() => {
          navigation.navigate("Datos Personales", {
            handleStepCompletion: (step) => handleStepCompletion(step),
          });
        }}
      >
        <Text style={styles.boxText}>1. Datos Personales</Text>
        <Text style={styles.boxDescription}>
          Rellene la información personal básica
        </Text>
      </TouchableOpacity>

      {/* Medical Registration */}
      <TouchableOpacity
        style={[
          styles.box,
          completedSteps.medicalRegistration ? styles.completedBox : null,
        ]}
        onPress={() => {
          navigation.navigate("Registro Médico", {
            handleStepCompletion: (step) => handleStepCompletion(step),
          });
        }}
      >
        <Text style={styles.boxText}>2. Registro Médico</Text>
        <Text style={styles.boxDescription}>
          Mida sus datos médicos usando los 'wearables'
        </Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity
        style={[
          styles.box,
          completedSteps.privacyPolicy ? styles.completedBox : null,
        ]}
        onPress={() => {
          navigation.navigate("Política de privacidad", {
            handleStepCompletion: (step) => handleStepCompletion(step),
          });
        }}
      >
        <Text style={styles.boxText}>3. Política de Privacidad</Text>
        <Text style={styles.boxDescription}>
          Para continuar, lea y acepte la política de privacidad
        </Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          allStepsCompleted ? styles.continueEnabled : styles.continueDisabled,
        ]}
        onPress={handleContinue}
        disabled={!allStepsCompleted}
      >
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  box: {
    width: "90%",
    backgroundColor: "#e6f7ff",
    padding: 28,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Android shadow
    alignItems: "center",
  },
  completedBox: {
    backgroundColor: "#d4edda", // Light green for completed steps
  },
  boxText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0056b3",
  },
  boxDescription: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  continueButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  continueEnabled: {
    backgroundColor: "#4CAF50", // Green when enabled
  },
  continueDisabled: {
    backgroundColor: "#ccc", // Gray when disabled
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

