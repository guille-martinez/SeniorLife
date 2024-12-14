import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function SeeRemindersScreen({ navigation }) {
  // Recordatorios agrupados por día
  const remindersByDay = {
    Lunes: [
      { title: "Tomar medicación", time: "10:00" },
      { title: "Revisión médica", time: "15:00" },
    ],
    Martes: [
      { title: "Tomar medicación", time: "10:00" },
      { title: "Llamar al doctor", time: "09:00"}
    ],
    Miércoles: [
      { title: "Tomar medicación", time: "10:00" },     
      { title: "Ejercicio ligero", time: "18:00" }
    ],
    Viernes: [{ title: "Consulta médica", time: "11:30" }],
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {Object.entries(remindersByDay).map(([day, reminders]) => (
          <View key={day} style={styles.dayContainer}>
            {/* Día */}
            <View style={styles.dayHeader}>
              <Text style={styles.dayText}>{day}</Text>
            </View>
            {/* Recordatorios del día */}
            {reminders.map((reminder, index) => (
              <View key={index} style={styles.reminderContainer}>
                <Text style={styles.reminderTitle}>
                  {reminder.title} - <Text style={styles.reminderTime}>{reminder.time}</Text>
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      {/* Botón Volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfaf6",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayHeader: {
    backgroundColor: "#dfe7fd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
  },
  reminderContainer: {
    backgroundColor: "#e6f7ff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reminderTitle: {
    fontSize: 16,
    color: "#333",
  },
  reminderTime: {
    fontSize: 16,
    color: "#555",
  },
  backButton: {
    backgroundColor: "#FF4C4C",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
