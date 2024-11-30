import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      {/* Name Input */}
      <TextInput style={styles.input} placeholder="Full Name" />
      
      {/* Email Input */}
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      
      {/* Password Input */}
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      
      {/* Confirm Password Input */}
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      
      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Signed Up!")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      {/* Navigate to Login */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Already have an account? Log In</Text>
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
    backgroundColor: "#f5f5f5",
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
    backgroundColor: "#008CBA",
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
