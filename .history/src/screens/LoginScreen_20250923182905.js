import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
  ScrollView,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For eye icon

const HARDCODED_EMAIL = "test@example.com";
const HARDCODED_PASSWORD = "password123";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const handleLogin = () => {
    if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
      Alert.alert("Success", "Logged in successfully!");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { flexDirection: isDesktop ? "row" : "column" },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        {/* Left Image Panel */}
        {isDesktop && (
          <View style={styles.leftPanel}>
            <ImageBackground
              source={{
                uri: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
              }}
              style={styles.backgroundImage}
              resizeMode="cover"
            >
              <View style={styles.overlay} />
              <Text style={styles.imageText}>Welcome to Dexora</Text>
            </ImageBackground>
          </View>
        )}

        {/* Right Form Panel */}
        <View style={styles.rightPanel}>
          <View style={styles.formCard}>
            <Text style={styles.logo}>🪟🚪</Text>
            <Text style={styles.welcome}>Welcome Back</Text>

            {/* Email Input */}
            <Animated.View
              style={[
                styles.inputWrapper,
                { borderColor: emailFocus ? "#007bff" : "#ccc" },
              ]}
            >
              <TextInput
                placeholder="Email Address"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </Animated.View>

            {/* Password Input */}
            <Animated.View
              style={[
                styles.inputWrapper,
                { borderColor: passwordFocus ? "#007bff" : "#ccc" },
              ]}
            >
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </Animated.View>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            {/* Or Divider */}
            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.line} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialButtons}>
              <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#4267B2" }]}>
                <Text style={styles.socialText}>Login with Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#DB4437" }]}>
                <Text style={styles.socialText}>Login with Google</Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up */}
            <Text style={styles.signup}>
              Don’t have an account?{" "}
              <Text style={styles.signupLink}>Sign up</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
  leftPanel: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  imageText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 50,
  },
  rightPanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  formCard: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 16,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 8,
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#666",
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: "#222",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 8,
    color: "#666",
    fontWeight: "500",
  },
  socialButtons: {
    marginBottom: 20,
  },
  socialBtn: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  socialText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  signup: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },
  signupLink: {
    color: "#007bff",
    fontWeight: "600",
  },
});
