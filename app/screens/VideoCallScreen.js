import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VideoCallsScreen() {
  const navigation = useNavigation();

  // Lista de contactos
  const allContacts = [
    { id: "1", name: "Pedro González" },
    { id: "2", name: "Ana López" },
    { id: "3", name: "Carlos Sánchez" },
    { id: "4", name: "María Fernández" },
    { id: "5", name: "Guillermo Martínez" },
    { id: "6", name: "Pol Termes" },
    { id: "7", name: "Arnau Garriga" },
    { id: "8", name: "Marcel Francesc" },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(allContacts);

  // Manejo de búsqueda
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleStartCall = (contactName) => {
    Alert.alert(
        "Confirmar Llamada",
        `¿Quieres iniciar una videollamada con ${contactName}?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: () => navigation.navigate("Llamada", { contactName }),
          },
        ]
      );
  };

  const handleBackToDashboard = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Frase introductoria */}
      <Text style={styles.title}>¿A quién desea llamar?</Text>

      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar contactos..."
        value={searchText}
        onChangeText={handleSearch}
      />

      {/* Lista de contactos */}
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => handleStartCall(item.name)}
          >
            <Text style={styles.contactText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.contactsList}
      />

      {/* Botón para volver */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBackToDashboard}
      >
        <Text style={styles.backButtonText}>Volver al Inicio</Text>
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
    fontSize: 22,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 10,
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  contactsList: {
    flexGrow: 1,
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: "#e6f7ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  contactText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0056b3",
  },
  backButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
