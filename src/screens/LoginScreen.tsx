// // src/screens/LoginScreen.tsx
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Platform,
//   KeyboardAvoidingView,
//   Alert,
//   Dimensions,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useNavigation } from "@react-navigation/native";

// type RootStackParamList = {
//   Login: undefined;
//   Home: undefined;
// };

// type LoginScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Login"
// >;

// const { width } = Dimensions.get("window");

// const LoginScreen: React.FC = () => {
//   const navigation = useNavigation<LoginScreenNavigationProp>();

//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   const validEmail = "adil@gmail.com";
//   const validPassword = "adil";

//   const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

//   const handleLogin = () => {
//     if (!email || !password) {
//       setErrorMessage("Please fill in all fields.");
//       return;
//     }
//     if (!validateEmail(email)) {
//       setErrorMessage("Please enter a valid email.");
//       return;
//     }
//     if (email !== validEmail || password !== validPassword) {
//       setErrorMessage("Invalid email or password.");
//       return;
//     }
//     setErrorMessage("");

//     Alert.alert("Login", "Login Successful!");
//     navigation.replace("Home");
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//     >
//       <LinearGradient colors={["#89CFF0", "#00416A"]} style={styles.container}>
//         {/* Logo */}
//         <View style={styles.logoContainer}>
//           <Icon name="door" size={64} color="#fff" />
//           <Text style={styles.logoText}>Windows & Doors</Text>
//           <Text style={styles.tagline}>Secure. Stylish. Durable.</Text>
//         </View>

//         {/* Login Box */}
//         <View style={styles.inputContainer}>
//           {/* Email */}
//           <View style={styles.inputWrapper}>
//             <Icon name="email-outline" size={20} color="#555" style={styles.inputIcon} />
//             <TextInput
//               placeholder="Email"
//               placeholderTextColor="#777"
//               style={styles.input}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               value={email}
//               onChangeText={setEmail}
//             />
//           </View>

//           {/* Password */}
//           <View style={styles.inputWrapper}>
//             <Icon name="lock-outline" size={20} color="#555" style={styles.inputIcon} />
//             <TextInput
//               placeholder="Password"
//               placeholderTextColor="#777"
//               style={styles.input}
//               secureTextEntry={!passwordVisible}
//               value={password}
//               onChangeText={setPassword}
//             />
//             <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
//               <Icon name={passwordVisible ? "eye-off-outline" : "eye-outline"} size={20} color="#555" />
//             </TouchableOpacity>
//           </View>

//           {/* Error Message */}
//           {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

//           {/* Login Button */}
//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
//             <LinearGradient colors={["#00c6ff", "#0072ff"]} style={styles.loginButtonGradient}>
//               <Text style={styles.loginButtonText}>Log In</Text>
//             </LinearGradient>
//           </TouchableOpacity>

//           {/* OR Divider */}
//           <View style={styles.horizontalContainer}>
//             <View style={styles.line} />
//             <Text style={styles.orText}>OR</Text>
//             <View style={styles.line} />
//           </View>

//           {/* Social Buttons */}
//           <View style={styles.socialButtonsContainer}>
//             <TouchableOpacity
//               style={[styles.socialButton, { backgroundColor: "#4267B2" }]}
//               onPress={() => Alert.alert("Facebook Login")}
//             >
//               <Icon name="facebook" size={20} color="#fff" />
//               <Text style={styles.socialButtonText}> Facebook</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.socialButton, { backgroundColor: "#db4437" }]}
//               onPress={() => Alert.alert("Google Login")}
//             >
//               <Icon name="google" size={20} color="#fff" />
//               <Text style={styles.socialButtonText}> Google</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Footer Links */}
//           <View style={styles.footerLinks}>
//             <TouchableOpacity onPress={() => Alert.alert("Forgot Password?")}>
//               <Text style={styles.linkText}>Forgot Password?</Text>
//             </TouchableOpacity>
//             <Text style={{ color: "#fff" }}>|</Text>
//             <TouchableOpacity onPress={() => Alert.alert("Sign Up")}>
//               <Text style={styles.linkText}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Footer */}
//         <Text style={styles.footerText}>© 2024 ClearView Windows & Doors. All rights reserved.</Text>
//       </LinearGradient>
//     </KeyboardAvoidingView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, width, justifyContent: "center", alignItems: "center", padding: 20 },
//   logoContainer: { alignItems: "center", marginBottom: 40 },
//   logoText: { color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 10 },
//   tagline: { color: "#e0e0e0", fontSize: 14, marginTop: 6, fontStyle: "italic" },
//   inputContainer: { width: "100%", maxWidth: 400, backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 15, padding: 20 },
//   inputWrapper: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 10, marginVertical: 12, paddingHorizontal: 10 },
//   inputIcon: { marginRight: 8 },
//   input: { flex: 1, height: 46, fontSize: 16, color: "#333" },
//   eyeIcon: { padding: 5 },
//   errorText: { color: "#ff6b6b", textAlign: "center", marginTop: 4 },
//   loginButton: { marginTop: 25, borderRadius: 25, overflow: "hidden" },
//   loginButtonGradient: { paddingVertical: 14, alignItems: "center", borderRadius: 25 },
//   loginButtonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
//   horizontalContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 25 },
//   line: { flex: 1, height: 1, backgroundColor: "#ddd", marginHorizontal: 12 },
//   orText: { color: "#fff", fontWeight: "600" },
//   socialButtonsContainer: { flexDirection: "row", justifyContent: "space-around" },
//   socialButton: { flexDirection: "row", alignItems: "center", borderRadius: 22, paddingVertical: 10, paddingHorizontal: 20, marginHorizontal: 10 },
//   socialButtonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
//   footerLinks: { marginTop: 28, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 16 },
//   linkText: { color: "#cce1ff", fontWeight: "600", textDecorationLine: "underline" },
//   footerText: { color: "#cce1ff", fontSize: 12, textAlign: "center", marginTop: 20 },
// });

import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  Platform,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const { width } = Dimensions.get("window");

const LoginApp: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    Alert.alert("Login", "Login Successful!");
    navigation.replace("Home");
  };
  return (
    <ImageBackground
      source={require("../../assets/bg4.jpg")} // replace with your background image
      style={styles.bg}
      blurRadius={3}
    >
      <BlurView intensity={35} tint="light" style={styles.overlay}>
        {/* Top Logo */}
        <MaterialCommunityIcons
          name="door-open"
          size={40}
          color="#111"
          style={{ marginBottom: 10 }}
        />

        {/* Title */}
        <Text style={styles.title}>Please Login</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#1b1a1aff"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#1b1a1aff"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Social Login Section */}
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#DB4437" }]}
            onPress={() => console.log("Google Login clicked!")}
          >
            <MaterialCommunityIcons name="google" size={22} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
            onPress={() => console.log("Facebook Login clicked!")}
          >
            <MaterialCommunityIcons name="facebook" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Already have account */}
        <Text style={styles.footer}>
          New Here?{" "}
          <TouchableOpacity onPress={() => console.log("Sign Up clicked!")}>
            <Text style={styles.login}>Sign Up, Please join us.</Text>
          </TouchableOpacity>
        </Text>
      </BlurView>
    </ImageBackground>
  );
};
export default LoginApp;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  overlay: {
    marginHorizontal: 10,
    borderRadius: 15,
    width: "25%", // more width for better UI
    alignSelf: "center",
    padding: 20,
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#beb8b8ff",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Arial",
    marginBottom: 20,
    color: "#111",
  },
  input: {
    width: "80%",
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  button: {
    backgroundColor: "#111",
    borderRadius: 12,
    paddingVertical: 10,
    width: "60%",
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#cfe6f0ff",
    fontWeight: "600",
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  footer: {
    marginTop: 20,
    fontSize: 13,
    color: "#161515ff",
  },
  login: {
    color: "#f70505ff",
    fontWeight: "500",
  },
});
