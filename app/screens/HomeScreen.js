import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.logo} />
      <Text style={styles.title}>Welcome to SeniorLife!</Text>
      <Text style={styles.subtitle}>Empowering connections. Enhancing experiences.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
    borderRadius: 75,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    width: "100%",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  signupButton: {
    backgroundColor: "#008CBA",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
