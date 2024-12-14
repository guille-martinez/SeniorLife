import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, TextInput } from "react-native";

export default function MedicalRegisterScreen({ navigation, route }) {
  const { handleStepCompletion } = route.params;

  const [heartRate, setHeartRate] = useState("");
  const [dailySteps, setDailySteps] = useState("");
  const [oxygenLevel, setOxygenLevel] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const connectWearables = () => {
    Alert.alert(
      "Conectar Wearables",
      "Se ha encontrado Wearables #1234. ¿Quieres continuar con este dispositivo?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Aceptar",
          onPress: () => {
            setLoading(true);
            setTimeout(() => {
              setHeartRate("72 bpm");
              setDailySteps("3450 pasos");
              setOxygenLevel("98%");
              setBloodType("A+");
              setIsConnected(true);
              setLoading(false);
              Alert.alert("¡Éxito!", "Wearables conectados correctamente.");
            }, 5000);
          },
        },
      ]
    );
  };

  const handleSave = () => {
    if (isConnected) {
      handleStepCompletion("medicalRegistration");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Use los wearables para completar los siguientes campos:</Text>
      <TouchableOpacity
        style={[
          styles.connectButton,
          isConnected ? styles.connectedButton : styles.notConnectedButton,
        ]}
        onPress={connectWearables}
        disabled={loading || isConnected}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.connectButtonText}>
            {isConnected ? "Conectado" : "Conectar Wearables"}
          </Text>
        )}
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Frecuencia Cardiovascular</Text>
        <TextInput
          style={styles.input}
          value={heartRate}
          editable={false}
          placeholder="bpm"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Pasos Diarios</Text>
        <TextInput
          style={styles.input}
          value={dailySteps}
          editable={false}
          placeholder="pasos"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Nivel de Oxígeno en Sangre</Text>
        <TextInput
          style={styles.input}
          value={oxygenLevel}
          editable={false}
          placeholder="%"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Grupo Sanguíneo</Text>
        <TextInput
          style={styles.input}
          value={bloodType}
          editable={false}
          placeholder="Ej: A+"
        />
      </View>

      <TouchableOpacity
        style={[
          styles.saveButton,
          isConnected ? styles.saveEnabled : styles.saveDisabled,
        ]}
        onPress={handleSave}
        disabled={!isConnected}
      >
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  connectButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  connectedButton: {
    backgroundColor: "#ccc",
  },
  notConnectedButton: {
    backgroundColor: "#007BFF",
  },
  connectButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  saveButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveEnabled: {
    backgroundColor: "#4CAF50",
  },
  saveDisabled: {
    backgroundColor: "#ccc",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
