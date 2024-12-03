import React, { useEffect } from "react";
import { View, Alert, StyleSheet } from "react-native";

export default function PrivacyPolicyScreen({ navigation, route }) {
  const { handleStepCompletion } = route.params;

  useEffect(() => {
    // Mostrar la alerta al cargar la pantalla
    Alert.alert(
      "Ups!",
      "No disponible, acepte para continuar.",
      [
        {
          text: "Aceptar",
          onPress: () => {
            handleStepCompletion();
            navigation.goBack(); // Volver a la pantalla de registro
          },
        },
      ]
    );
  }, []);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Fondo blanco por consistencia
  },
});
