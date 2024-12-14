import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MedicalTrackingScreen({ navigation, route }) {
  // Datos recibidos desde Registro Médico
  const {
    heartRate = 72, // Frecuencia cardiaca (bpm)
    dailySteps = 3450, // Pasos diarios
    oxygenLevel = 98, // Nivel de oxígeno en sangre (%)
    sleepQuality = 8, // Calidad del sueño (1-10)
    bloodPressure = "120/80", // Presión arterial
  } = route.params || {};

  const maxSteps = 10000; // Meta de pasos

  return (
    <View style={styles.container}>
      {/* Pasos Diarios */}
      <View style={styles.metricSection}>
        <View style={styles.metricHeader}>
          <Text style={styles.metricTitle}>Pasos Diarios</Text>
          <TouchableOpacity
            style={styles.hourlyButtonRight}
            onPress={() => navigation.navigate("Pasos Diarios")}
          >
            <Text style={styles.hourlyButtonText}>Ver por horas &gt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBarFill, { width: `${(dailySteps / maxSteps) * 100}%` }]}
          />
        </View>
        <Text style={styles.metricValue}>{dailySteps} / {maxSteps} pasos</Text>
      </View>

      {/* Frecuencia Cardiaca */}
      <View style={styles.metricSection}>
        <View style={styles.metricHeader}>
          <Text style={styles.metricTitle}>Frecuencia Cardiaca</Text>
          <TouchableOpacity
            style={styles.hourlyButtonRight}
            onPress={() => navigation.navigate("Frecuencia Cardíaca")}
          >
            <Text style={styles.hourlyButtonText}>Ver por horas &gt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.barContainer}>
          <View style={[styles.barFill, { width: `${heartRate}%` }]} />
        </View>
        <Text style={styles.metricValue}>{heartRate} bpm</Text>
      </View>

      {/* Nivel de Oxígeno */}
      <View style={styles.metricSection}>
        <View style={styles.metricHeader}>
          <Text style={styles.metricTitle}>Nivel de Oxígeno</Text>
          <TouchableOpacity
            style={styles.hourlyButtonRight}
            onPress={() => navigation.navigate("Nível de Oxígeno")}
          >
            <Text style={styles.hourlyButtonText}>Ver por horas &gt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.barContainer}>
          <View style={[styles.barFill, { width: `${oxygenLevel}%` }]} />
        </View>
        <Text style={styles.metricValue}>{oxygenLevel}%</Text>
      </View>

      {/* Calidad del Sueño */}
      <View style={styles.metricSection}>
        <View style={styles.metricHeader}>
          <Text style={styles.metricTitle}>Calidad del Sueño</Text>
          <TouchableOpacity
            style={styles.hourlyButtonRight}
            onPress={() => navigation.navigate("Calidad de Sueño")}
          >
            <Text style={styles.hourlyButtonText}>Ver por horas &gt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBarFill, { width: `${(sleepQuality / 10) * 100}%` }]}
          />
        </View>
        <Text style={styles.metricValue}>{sleepQuality} / 10</Text>
      </View>

      {/* Botón para volver */}
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
    textAlign: "center",
    marginBottom: 20,
  },
  metricSection: {
    marginBottom: 30,
  },
  metricHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  metricTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  metricValue: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },
  progressBarContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 10,
  },
  barContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  barFill: {
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
  hourlyButtonRight: {
    marginLeft: 10,
  },
  hourlyButtonText: {
    color: "#007BFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
