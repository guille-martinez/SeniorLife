import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function SimulacionLlamada() {
  const route = useRoute();
  const navigation = useNavigation();
  const { contact } = route.params; // Contacto con el que se está llamando
  const [timer, setTimer] = useState(0);

  // Simulación del tiempo de llamada
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval); // Limpiar el temporizador al salir
  }, []);

  const handleEndCall = () => {
    Alert.alert("Llamada finalizada", `Terminaste la llamada.`, [
      {
        text: "Aceptar",
        onPress: () => navigation.goBack(), // Vuelve a la pantalla anterior
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Simulación de cámara del contacto */}
      <View style={styles.videoContainer}>
        <Image
          style={styles.contactImage}
          source={{
            uri: "https://placekitten.com/400/400", // Imagen representativa (cambia por una que prefieras)
          }}
        />
      </View>

      {/* Cronómetro de llamada */}
      <Text style={styles.timer}>
        Duración: {Math.floor(timer / 60)}:
        {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
      </Text>

      {/* Botón para finalizar llamada */}
      <TouchableOpacity style={styles.endCallButton} onPress={handleEndCall}>
        <Text style={styles.endCallButtonText}>Finalizar Llamada</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfaf6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  videoContainer: {
    width: "90%",
    height: 400,
    backgroundColor: "#000",
    borderRadius: 15,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Para asegurar que la imagen se adapta al marco
    borderWidth: 2, // Borde para simular un marco
    borderColor: "#333",
  },
  contactImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ajusta la imagen al contenedor
  },
  timer: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  endCallButton: {
    backgroundColor: "#FF4C4C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  endCallButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
