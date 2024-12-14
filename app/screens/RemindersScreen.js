import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function RemindersScreen({ navigation }) {
  const [reminders, setReminders] = useState([
    { id: "1", title: "Tomar medicación                      Lunes | 10:00" },
    { id: "2", title: "Revisión médica                         Lunes | 15:00"},
    { id: "3", title: "Llamar al doctor                         Martes | 9:00"},
  ]);

  return (
    <View style={styles.container}>
      {/* Botón para Ver Recordatorios */}
      <TouchableOpacity
        style={styles.viewRemindersButton}
        onPress={() => navigation.navigate("Ver Recordatorios", { reminders })}
      >
        <Text style={styles.viewRemindersText}>Ver Todos </Text>
      </TouchableOpacity>

      {/* Lista de recordatorios (spoiler) */}
      <FlatList
        data={reminders.slice(0, 3)} // Mostrar solo los primeros 2
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text style={styles.reminderText}>{item.title}</Text>
          </View>
        )}
        style={styles.remindersList}
      />

      {/* Botón para Añadir Recordatorio */}
      <TouchableOpacity
        style={styles.addReminderButton}
        onPress={() => navigation.navigate("Añadir Recordatorio")}
      >
        <Text style={styles.addReminderText}>Añadir Recordatorio</Text>
      </TouchableOpacity>

      {/* Botón para volver al Dashboard */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
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
    justifyContent: "flex-start",
  },
  viewRemindersButton: {
    backgroundColor: "#4CAF50",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  viewRemindersText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  remindersList: {
    marginBottom: 20,
  },
  reminderItem: {
    padding: 15,
    backgroundColor: "#e6f7ff",
    borderRadius: 8,
    marginBottom: 10,
  },
  reminderText: {
    fontSize: 16,
    color: "#333",
  },
  addReminderButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  addReminderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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