import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native"; // works on web & mobile

const HARDCODED_EMAIL = "test@example.com";
const HARDCODED_PASSWORD = "password123";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      >
        {/* Left Image Panel */}
        <View style={[styles.leftPanel, { minHeight: 300 }]}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Right Form Panel */}
        <View style={[styles.rightPanel, { minHeight: 300 }]}>
          <View style={styles.form}>
            <Text style={styles.logo}>🪟🚪</Text>
            <Text style={styles.welcome}>Welcome</Text>

            <TextInput
              placeholder="Email Address"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

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
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  leftPanel: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  rightPanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  form: {
    width: "100%",
    maxWidth: 360,
  },
  logo: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 16,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
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
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signup: {
    textAlign: "center",
    color: "#666",
  },
  signupLink: {
    color: "#007bff",
  },
});
