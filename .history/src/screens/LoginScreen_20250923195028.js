import React, { useState, useEffect } from "react";
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
import { Ionicons } from "@expo/vector-icons";

const HARDCODED_EMAIL = "adil";
const HARDCODED_PASSWORD = "adil";

const CreativeLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  // Animation
  const slideAnim = new Animated.Value(200); // start below
  const fadeAnim = new Animated.Value(0); // initial opacity

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleLogin = () => {
    if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
      Alert.alert("Success", "Logged in successfully!");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1581091870622-0c174f60b6f7?auto=format&fit=crop&w=1600&q=80",
        }}
        style={styles.backgroundImage}
      >
        {/* Overlay for better contrast */}
        <View style={styles.overlay} />

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View
            style={[
              styles.loginCard,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
          >
            {/* Branding */}
            <Text style={styles.logo}>🏡🪟🚪</Text>
            <Text style={styles.welcome}>Welcome to Dexora</Text>
            <Text style={styles.subtitle}>Premium Doors & Windows</Text>

            {/* Email Input */}
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#ddd"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#ddd"
                style={styles.input}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            {/* Social Login */}
            <View style={styles.socialContainer}>
              <TouchableOpacity
                style={[styles.socialBtn, { backgroundColor: "#4267B2" }]}
              >
                <Text style={styles.socialText}>Login with Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialBtn, { backgroundColor: "#DB4437" }]}
              >
                <Text style={styles.socialText}>Login with Google</Text>
              </TouchableOpacity>
            </View>

            {/* Sign up */}
            <Text style={styles.signup}>
              Don’t have an account?{" "}
              <Text style={styles.signupLink}>Sign up</Text>
            </Text>
          </Animated.View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreativeLoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  loginCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 16,
    padding: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    backdropFilter: "blur(10px)", // web blur effect
  },
  logo: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 12,
    color: "#fff",
  },
  welcome: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: "#ddd",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: "#fff",
  },
  eyeIcon: {
    marginLeft: 8,
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#fff",
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  socialContainer: {
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
    color: "#fff",
    fontSize: 14,
  },
  signupLink: {
    color: "#fff",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
