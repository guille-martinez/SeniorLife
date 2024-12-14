import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function SocialGroupsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Sección de Chats */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Chats</Text>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => navigation.navigate("Chat", { contact: "Pol Termes" })}
          >
            <Text style={styles.chatText}>Pol Termes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => navigation.navigate("Chat", { contact: "Pedro González" })}
          >
            <Text style={styles.chatText}>Pedro González</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => navigation.navigate("Chat", { contact: "Familia" })}
          >
            <Text style={styles.chatText}>Familia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => navigation.navigate("Chat", { contact: "Ana López" })}
          >
            <Text style={styles.chatText}>Ana López</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => navigation.navigate("Chat", { contact: "Canasteras🃏" })}
          >
            <Text style={styles.chatText}>Canasteras🃏</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Sección de Ubicación */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ubicación de Contactos</Text>
        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => navigation.navigate("LocationScreen")}
        >
          <Text style={styles.locationButtonText}>Ver Ubicación de Contactos</Text>
        </TouchableOpacity>
      </View>

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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: "#333",
    marginBottom: 10,
  },
  scrollView: {
    maxHeight: 250,
  },
  chatButton: {
    backgroundColor: "#e6f7ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  chatText: {
    fontSize: 16,
    color: "#0056b3",
    fontWeight: "bold",
  },
  locationButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  locationButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#FF4C4C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});