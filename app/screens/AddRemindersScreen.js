import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Alert,
} from "react-native";

export default function AddReminderScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("Lunes");
  const [time, setTime] = useState("08:00");

  const [isDayModalVisible, setDayModalVisible] = useState(false);
  const [isTimeModalVisible, setTimeModalVisible] = useState(false);

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert("Error", "Por favor, ingrese un título para el recordatorio.");
      return;
    }

    Alert.alert(
      "Recordatorio Guardado",
      `Título: ${title}\nDía: ${day}\nHora: ${time}`,
      [
        {
          text: "Aceptar",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>

      {/* Title Input */}
      <Text style={styles.label}>Recordatorio</Text>
      <TextInput
        style={styles.input}
        placeholder="Título del Recordatorio"
        value={title}
        onChangeText={setTitle}
      />

      {/* Select Day */}
      <Text style={styles.label}>Seleccionar Día</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setDayModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{day}</Text>
      </TouchableOpacity>

      {/* Select Time */}
      <Text style={styles.label}>Seleccionar Hora</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setTimeModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{time}</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Guardar Recordatorio</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>

      {/* Day Modal */}
      <Modal visible={isDayModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <FlatList
            data={days}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  setDay(item);
                  setDayModalVisible(false);
                }}
              >
                <Text style={styles.modalText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setDayModalVisible(false)}
          >
            <Text style={styles.modalCloseText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Time Modal */}
      <Modal visible={isTimeModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <FlatList
            data={times}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  setTime(item);
                  setTimeModalVisible(false);
                }}
              >
                <Text style={styles.modalText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setTimeModalVisible(false)}
          >
            <Text style={styles.modalCloseText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 25,
    color: "#333",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 45,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "20%",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#333",
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#FF4C4C",
    borderRadius: 8,
  },
  modalCloseText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
