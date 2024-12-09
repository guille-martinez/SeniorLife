import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HealthMonitorScreen({ navigation }) {
  // Example data for health metrics
  const steps = 3450; // Current steps
  const maxSteps = 10000; // Step goal
  const heartRate = 72; // Heart rate in bpm
  const oxygenLevel = 98; // Oxygen level in %

  return (
    <View style={styles.container}>
      {/* Steps Progress */}
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Pasos: {steps} / {maxSteps}</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${(steps / maxSteps) * 100}%` }]} />
        </View>
      </View>

      {/* Heart Rate */}
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Frecuencia Cardiaca</Text>
        <Text style={styles.metricValue}>{heartRate} bpm</Text>
      </View>

      {/* Oxygen Level */}
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Nivel de Oxígeno</Text>
        <Text style={styles.metricValue}>{oxygenLevel}%</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${oxygenLevel}%` }]} />
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Volver al Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fdfaf6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
  },
  metricContainer: {
    marginBottom: 20,
  },
  metricTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  metricValue: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  progressBarContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: "#FF4C4C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
