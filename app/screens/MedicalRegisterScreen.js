import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function MedicalRegisterScreen({ navigation, route }) {
  const { handleStepCompletion } = route.params;

  // State for each input
  const [bloodType, setBloodType] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [dailySteps, setDailySteps] = useState("");
  const [oxygenLevel, setOxygenLevel] = useState("");

  const handleSave = () => {
    // Form validation
    if (!bloodType || !heartRate || !dailySteps || !oxygenLevel) {
      Alert.alert("Error", "Por favor, complete todos los campos.");
      return;
    }

    // Additional validation (if needed)
    const heartRateValid = !isNaN(heartRate) && heartRate > 0;
    const stepsValid = !isNaN(dailySteps) && dailySteps > 0;
    const oxygenValid = !isNaN(oxygenLevel) && oxygenLevel >= 0 && oxygenLevel <= 100;

    if (!heartRateValid || !stepsValid || !oxygenValid) {
      Alert.alert(
        "Datos Inválidos",
        "Por favor, introduzca valores válidos para los campos médicos."
      );
      return;
    }

    // If all validations pass
    handleStepCompletion();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro Médico</Text>
      
      {/* Form Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Grupo Sanguíneo (A+, A-, etc.)"
        value={bloodType}
        onChangeText={setBloodType}
      />
      <TextInput
        style={styles.input}
        placeholder="Frecuencia Cardiovascular (bpm)"
        keyboardType="numeric"
        value={heartRate}
        onChangeText={setHeartRate}
      />
      <TextInput
        style={styles.input}
        placeholder="Pasos Diarios"
        keyboardType="numeric"
        value={dailySteps}
        onChangeText={setDailySteps}
      />
      <TextInput
        style={styles.input}
        placeholder="Nivel de Oxígeno en Sangre (%)"
        keyboardType="numeric"
        value={oxygenLevel}
        onChangeText={setOxygenLevel}
      />
      
      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#008CBA",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
