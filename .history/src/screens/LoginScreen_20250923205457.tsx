// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Alert,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Home from './Home';
const { width, height } = Dimensions.get("window");

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validEmail = "adil@gmail.com";
  const validPassword = "adil";

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
    
    Alert.alert("Login", "Login Successful!");
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
          {/* Email */}
          <View style={styles.inputWrapper}>
            <Icon
              name="email-outline"
              size={20}
              color="#555"
              style={styles.inputIcon}
            />
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

          {/* Password */}
          <View style={styles.inputWrapper}>
            <Icon
              name="lock-outline"
              size={20}
              color="#555"
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#777"
              style={styles.input}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.eyeIcon}
            >
              <Icon
                name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#555"
              />
            </TouchableOpacity>
          </View>

          {/* Error */}
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#00c6ff", "#0072ff"]}
              style={styles.loginButtonGradient}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* OR Divider */}
          <View style={styles.horizontalContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* Social Buttons */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: "#4267B2" }]}
              onPress={() => Alert.alert("Facebook Login")}
            >
              <Icon name="facebook" size={20} color="#fff" />
              <Text style={styles.socialButtonText}> Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: "#db4437" }]}
              onPress={() => Alert.alert("Google Login")}
            >
              <Icon name="google" size={20} color="#fff" />
              <Text style={styles.socialButtonText}> Google</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Links */}
          <View style={styles.footerLinks}>
            <TouchableOpacity onPress={() => Alert.alert("Forgot Password?")}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
            <Text style={{ color: "#fff" }}>|</Text>
            <TouchableOpacity onPress={() => Alert.alert("Sign Up")}>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>
          © 2024 ClearView Windows & Doors. All rights reserved.
        </Text>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: Platform.OS === "web" ? "Arial, sans-serif" : "System",
  },
  tagline: {
    color: "#e0e0e0",
    fontSize: 14,
    marginTop: 6,
    fontStyle: "italic",
  },
  inputContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    marginVertical: 12,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  inputIcon: { marginRight: 8 },
  input: { flex: 1, height: 46, fontSize: 16, color: "#333" },
  eyeIcon: { padding: 5 },
  errorText: { color: "#ff6b6b", textAlign: "center", marginTop: 4 },
  loginButton: { marginTop: 25, borderRadius: 25, overflow: "hidden" },
  loginButtonGradient: {
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#0072ff",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  loginButtonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ddd", marginHorizontal: 12 },
  orText: { color: "#fff", fontWeight: "600" },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 2 },
    elevation: 4,
  },
  socialButtonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  footerLinks: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  linkText: {
    color: "#cce1ff",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  footerText: {
    color: "#cce1ff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
});
