import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PrivacyPolicyScreen({ navigation, route }) {
  const { handleStepCompletion } = route.params;
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const handleSave = () => {
    if (isAccepted) {
      handleStepCompletion("privacyPolicy");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.policyContainer}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.policyText}>
          Bienvenido a nuestra aplicación. Valoramos su privacidad y
          aseguramos que toda la información que proporcione será protegida de
          acuerdo con nuestras políticas.{"\n\n"}
          1. Recopilamos datos únicamente para proporcionar un mejor servicio y
          mejorar su experiencia.{"\n\n"}
          2. Los datos de salud registrados con dispositivos wearables serán
          utilizados únicamente con fines de seguimiento personal.{"\n\n"}
          3. No compartiremos ni venderemos su información a terceros sin su
          consentimiento.{"\n\n"}
          4. Usted tiene derecho a solicitar la eliminación de sus datos en
          cualquier momento.{"\n\n"}
          Para continuar, acepte la política de privacidad.
          </Text>
        </ScrollView>
        {/* Accept Button */}
        <TouchableOpacity
          style={[
            styles.acceptButton,
            isAccepted ? styles.accepted : styles.notAccepted,
          ]}
          onPress={handleAccept}
          disabled={isAccepted}
        >
          <Text style={styles.acceptButtonText}>
            {isAccepted ? "Aceptado" : "Aceptar Política de Privacidad"}
          </Text>
        </TouchableOpacity>
      </View>
      {/* Save Button */}
      <TouchableOpacity
        style={[
          styles.saveButton,
          isAccepted ? styles.saveEnabled : styles.saveDisabled,
        ]}
        onPress={handleSave}
        disabled={!isAccepted}
      >
        <Text style={styles.saveButtonText}>Guardar</Text>
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
  policyContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 25,
    marginBottom: 20,
    marginTop: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    minHeight: 350, // Added minimum height for consistency
    justifyContent: "space-between", // Align content within the box
  },
  scrollView: {
    maxHeight: 300, // To control the size of the scrollable area
    marginBottom: 10,
  },
  policyText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    color: "#333",
  },
  acceptButton: {
    alignSelf: "flex-start", // Align to the left of the container
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  accepted: {
    backgroundColor: "#d4edda", // Light green when accepted
  },
  notAccepted: {
    backgroundColor: "#4CAF50", // Green when not accepted yet
  },
  acceptButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  saveButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveEnabled: {
    backgroundColor: "#4CAF50", // Green when enabled
  },
  saveDisabled: {
    backgroundColor: "#ccc", // Gray when disabled
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
