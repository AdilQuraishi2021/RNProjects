// import React, { useState } from "react";
// import {
//   View,
//   Pressable,
//   Text,
//   StyleSheet,
//   Image,
//   Platform,
//   Animated,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";
// import logo from "../../assets/Logo.png";

// export default function Header() {
//   const navigation = useNavigation();
//   const menuItems = [
//     { label: "Home", route: "Home" },
//     { label: "Products", route: "Products" },
//     { label: "Services", route: "Services" },
//     { label: "About Us", route: "About" },
//     { label: "Contact Us", route: "Contact" },
//   ];

//   return (
//     <LinearGradient
//       colors={["#ffffff", "#f5f8fa"]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.header}
//     >
//       {/* Left: Logo + Brand */}
//       <View style={styles.brandRow}>
//         <Image source={logo} style={styles.logoImg} resizeMode="contain" />
//         <Text style={styles.logoText}>Dexora-India</Text>
//       </View>

//       {/* Center: Nav Links */}
//       <View style={styles.navLinks}>
//         {menuItems.map((item) => (
//           <HoverLink
//             key={item.route}
//             label={item.label}
//             onPress={() => navigation.navigate(item.route)}
//           />
//         ))}
//       </View>

//       {/* Right: Shop Button */}
//       <ScalePressable
//         style={styles.shopBtn}
//         onPress={() => navigation.navigate("Products")}
//       >
//         <Text style={styles.shopText}>Shop Now</Text>
//       </ScalePressable>
//     </LinearGradient>
//   );
// }

// function HoverLink({ label, onPress }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <ScalePressable
//       onPress={onPress}
//       onHoverIn={() => setHovered(true)}
//       onHoverOut={() => setHovered(false)}
//       style={styles.linkContainer}
//     >
//       <Text
//         style={[
//           styles.link,
//           hovered && Platform.OS === "web" && styles.linkHover,
//         ]}
//       >
//         {label}
//       </Text>
//       {hovered && Platform.OS === "web" && <View style={styles.underline} />}
//     </ScalePressable>
//   );
// }

// /* Reusable pressable with a tiny scale animation on press/hover */
// function ScalePressable({ children, style, ...props }) {
//   const scale = useState(new Animated.Value(1))[0];

//   const animate = (to) =>
//     Animated.spring(scale, { toValue: to, useNativeDriver: true, friction: 5 });

//   return (
//     <Pressable
//       {...props}
//       onPressIn={() => animate(0.95)}
//       onPressOut={() => animate(1)}
//       onHoverIn={() => animate(1.05)}
//       onHoverOut={() => animate(1)}
//     >
//       <Animated.View style={[style, { transform: [{ scale }] }]}>
//         {children}
//       </Animated.View>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     shadowColor: "#000",
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     elevation: 4,
//     borderBottomWidth: Platform.OS === "web" ? 0 : StyleSheet.hairlineWidth,
//     borderColor: "#e1e5ea",
//   },
//   brandRow: { flexDirection: "row", alignItems: "center" },
//   logoImg: { width: 48, height: 48, marginRight: 10 },
//   logoText: {
//     fontSize: 24,
//     fontWeight: "800",
//     color: "#0A657E",
//     letterSpacing: 0.5,
//   },
//   navLinks: { flexDirection: "row", alignItems: "center" },
//   linkContainer: { marginHorizontal: 20, alignItems: "center" },
//   link: {
//     fontSize: 17,
//     color: "#444",
//     transitionProperty: "color",
//     transitionDuration: "150ms",
//   },
//   linkHover: {
//     color: "#0A657E",
//     fontWeight: "600",
//   },
//   underline: {
//     marginTop: 2,
//     height: 2,
//     width: "100%",
//     backgroundColor: "#0A657E",
//     borderRadius: 2,
//   },
//   shopBtn: {
//     backgroundColor: "#0A657E",
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//     borderRadius: 25,
//     shadowColor: "#0A657E",
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   shopText: {
//     color: "#fff",
//     fontWeight: "700",
//     fontSize: 16,
//     letterSpacing: 0.3,
//   },
// });
