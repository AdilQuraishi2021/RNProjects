import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Home from "./Home"; // Make sure Home.tsx exists

const { width } = Dimensions.get("window");

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validEmail = "adil@gmail.com";
  const validPassword = "adil";

  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
    if (email !== validEmail || password !== validPassword) {
      setErrorMessage("Invalid email or password.");
      return;
    }
    setErrorMessage("");

    alert("Login Successful!"); // TypeScript + Web: alert works fine
    // Here you could navigate to Home screen
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <LinearGradient colors={["#89CFF0", "#00416A"]} style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Icon name="door-variant" size={64} color="#fff" />
          <Text style={styles.logoText}>ClearView Windows & Doors</Text>
          <Text style={styles.tagline}>Secure. Stylish. Durable.</Text>
        </View>

        {/* Login Box */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Icon name="email-outline" size={20} color="#555" style={styles.inputIcon} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#777"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon name="lock-outline" size={20} color="#555" style={styles.inputIcon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#777"
              style={styles.input}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
              <Icon name={passwordVisible ? "eye-off-outline" : "eye-outline"} size={20} color="#555" />
            </TouchableOpacity>
          </View>

          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
            <LinearGradient colors={["#00c6ff", "#0072ff"]} style={styles.loginButtonGradient}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width, justifyContent: "center", alignItems: "center", padding: 20 },
  logoContainer: { alignItems: "center", marginBottom: 40 },
  logoText: { color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 10 },
  tagline: { color: "#e0e0e0", fontSize: 14, marginTop: 6, fontStyle: "italic" },
  inputContainer: { width: "100%", maxWidth: 400, backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 15, padding: 20 },
  inputWrapper: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 10, marginVertical: 12, paddingHorizontal: 10 },
  inputIcon: { marginRight: 8 },
  input: { flex: 1, height: 46, fontSize: 16, color: "#333" },
  eyeIcon: { padding: 5 },
  errorText: { color: "#ff6b6b", textAlign: "center", marginTop: 4 },
  loginButton: { marginTop: 25, borderRadius: 25, overflow: "hidden" },
  loginButtonGradient: { paddingVertical: 14, alignItems: "center", borderRadius: 25 },
  loginButtonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
