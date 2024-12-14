import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DoctorAppointment() {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState(null);

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleConfirmAppointment = () => {
    if (!selectedTime) {
      alert("Por favor, seleccione una hora para la consulta médica.");
      return;
    }

    alert(`Cita confirmada para las ${selectedTime}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una hora para tu cita médica</Text>

      <FlatList
        data={availableTimes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.timeSlot,
              selectedTime === item && styles.selectedTimeSlot,
            ]}
            onPress={() => setSelectedTime(item)}
          >
            <Text
              style={
                selectedTime === item
                  ? styles.selectedTimeText
                  : styles.timeText
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmAppointment}
      >
        <Text style={styles.confirmButtonText}>Confirmar Cita</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  timeSlot: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  selectedTimeSlot: {
    borderColor: "#4CAF50",
    backgroundColor: "#e8f5e9",
  },
  timeText: {
    fontSize: 16,
    color: "#333",
  },
  selectedTimeText: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
