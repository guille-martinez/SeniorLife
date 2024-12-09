import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function PersonalDataScreen({ navigation, route }) {
  const { handleStepCompletion } = route.params;

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    // Form validation
    if (!name || !birthdate || !email || !phone) {
      Alert.alert("Error", "Por favor, complete todos los campos.");
      return;
    }

    // Additional validation (e.g., email format, phone format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Por favor, introduzca un correo electrónico válido.");
      return;
    }

    const phoneRegex = /^[0-9]{9,15}$/; // Example regex for phone numbers
    if (!phoneRegex.test(phone)) {
      Alert.alert("Error", "Por favor, introduzca un número de teléfono válido.");
      return;
    }

    // If all validations pass
    Alert.alert("¡Guardado!", "Los datos personales se han guardado correctamente.");
    handleStepCompletion("personalData"); // Llamamos aquí
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rellene los siguientes campos:</Text>
      
      {/* Form Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        keyboardType="phone-pad"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir Contraseña"
        keyboardType="phone-pad"
        value={password}
        onChangeText={setPassword}
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
    fontSize: 20,
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
    backgroundColor: "#4CAF50",
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
