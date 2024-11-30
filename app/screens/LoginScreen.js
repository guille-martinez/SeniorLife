import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      {/* Email Input */}
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      
      {/* Password Input */}
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      
      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Logged In!")}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      {/* Navigate to Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
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
    width: "80%",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    color: "#0066cc",
    textDecorationLine: "underline",
  },
});
