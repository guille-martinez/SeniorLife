import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";

export default function EmergencyScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [contactsAlerted, setContactsAlerted] = useState([]);

  useEffect(() => {
    // Simular notificación de contactos de emergencia
    const timer = setTimeout(() => {
      setIsLoading(false);
      setContactsAlerted([
        { id: "1", name: "Juan Pérez", phone: "123-456-789" },
        { id: "2", name: "Ana Gómez", phone: "987-654-321" },
        { id: "3", name: "Carlos Ruiz", phone: "456-789-123" },
      ]);
    }, 5000); // Simulación de 5 segundos de carga

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Sección superior: Simulación de llamada */}
      <View style={styles.callingSection}>
        {isLoading ? (
          <>
            <Text style={styles.callingText}>Llamando al 112...</Text>
            <ActivityIndicator size="large" color="#FF4C4C" />
          </>
        ) : (
          <Text style={styles.callingText}>Conectado con el 112</Text>
        )}
      </View>

      {/* Sección inferior: Lista de contactos alertados */}
      <View style={styles.contactsSection}>
        <Text style={styles.contactsTitle}>Contactos Alertados:</Text>
        {isLoading ? (
          <ActivityIndicator size="small" color="#FF4C4C" />
        ) : (
          <FlatList
            data={contactsAlerted}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.contactItem}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactPhone}>{item.phone}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* Botón para volver */}
      {!isLoading && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fdfaf6",
  },
  callingSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  callingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF4C4C",
    textAlign: "center",
  },
  contactsSection: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  contactsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "left",
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  contactName: {
    fontSize: 16,
    color: "#333",
  },
  contactPhone: {
    fontSize: 16,
    color: "#666",
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
