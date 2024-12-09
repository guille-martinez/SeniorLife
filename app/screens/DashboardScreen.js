import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Saludo */}
      <View style={styles.header}>
        <Text style={styles.greeting}>¡Hola, María!</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
      </View>

      {/* Opciones principales */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("Video Llamada")}
        >
          <Text style={styles.optionText}>🎥 Video Llamadas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("Monitor de Salud")}
        >
          <Text style={styles.optionText}>❤️ Monitor de Salud</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("SocialGroups")}
        >
          <Text style={styles.optionText}>👥 Grupos Sociales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("Reminders")}
        >
          <Text style={styles.optionText}>⏰ Recordatorios</Text>
        </TouchableOpacity>
      </View>

      {/* Resumen de salud */}
      <View style={styles.healthSummary}>
        <Text style={styles.summaryTitle}>Resumen de Salud</Text>
        <Text style={styles.summaryText}>🏃 Pasos: 3,450</Text>
        <Text style={styles.summaryText}>❤️ Frecuencia Cardiaca: 72 bpm</Text>
        <Text style={styles.summaryText}>🩸 Nivel de Oxígeno: 98%</Text>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigation.navigate("HealthDetails")}
        >
          <Text style={styles.detailsButtonText}>Ver Detalles</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de Emergencia */}
      <TouchableOpacity
        style={styles.emergencyButton}
        onPress={() =>
          Alert.alert("Emergencia", "Llamando a los servicios de emergencia...")
        }
      >
        <Text style={styles.emergencyText}>🚨 Emergencia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fdfaf6", // Fondo cálido
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  date: {
    fontSize: 18,
    color: "#666",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  optionButton: {
    width: "48%", // Adjust to fit 2 buttons per row with minimal spacing
    padding: 15,
    backgroundColor: "#e6f7ff",
    borderRadius: 10,
    marginBottom: 5, // Reduce spacing between buttons
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0056b3",
    textAlign: "center",
  },
  healthSummary: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  detailsButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emergencyButton: {
    backgroundColor: "#FF4C4C",
    padding: 15,
    borderRadius: 15,
    marginBottom: 35,
    alignItems: "center",
  },
  emergencyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
