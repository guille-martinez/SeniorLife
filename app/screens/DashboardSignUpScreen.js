import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DashboardSignUpScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true); // Mostrar el modal inicialmente

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleRequestAppointment = () => {
    setModalVisible(false);
    navigation.navigate("Cita Médica")
  };

  return (
    <View style={styles.container}>
      {/* Modal para el aviso */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalOverlay}> {/* Fondo para oscurecer la pantalla */}
          <View style={styles.modalContainer}> {/* Contenedor principal del modal */}
            <Text style={styles.modalTitle}>Atención</Text>
            <Text style={styles.modalText}>
              Para completar el proceso de registro, es necesario contactar con un médico y agendar una cita para validar las métricas de los wearables.
            </Text>

            <TouchableOpacity style={styles.modalActionButton} onPress={handleRequestAppointment}>
              <Text style={styles.modalActionText}>Pedir cita con el médico</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalCloseButton} onPress={handleModalClose}>
              <Text style={styles.modalCloseButtonText}>Entendido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Contenido principal de Dashboard */}
      <View style={styles.header}>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
      </View>

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
          onPress={() => navigation.navigate("Grupos Sociales")}
        >
          <Text style={styles.optionText}>👥 Grupos Sociales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("Recordatorios")}
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
      </View>

      {/* Botones de emergencia */}
      <View style={styles.emergencyContainer}>
        {/* Botón de Emergencia */}
        {/* Botón de Contactos de Emergencia */}
        <TouchableOpacity
          style={styles.contactsButton}
          onPress={() => navigation.navigate("Contactos de emergencia")}
        >
          <Text style={styles.contactsText}>📋 Contactos de Emergencia</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => navigation.navigate("Emergencia")}
        >
          <Text style={styles.emergencyText}>🚨 EMERGENCIA</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fdfaf6",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  optionButton: {
    width: "48%",
    padding: 15,
    backgroundColor: "#e6f7ff",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0056b3",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalActionButton: {
    marginBottom: 15,
  },
  modalActionText: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalCloseButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalCloseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emergencyContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  emergencyButton: {
    backgroundColor: "#FF4C4C",
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
  },
  emergencyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactsButton: {
    backgroundColor: "#0066cc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  contactsText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  healthSummary: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginTop: 20,
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
});
