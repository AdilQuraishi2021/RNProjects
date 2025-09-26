import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/Logo.png";

export default function Header() {
  const navigation = useNavigation();
  const menuItems = [
    { label: "Home", route: "Home" },
    { label: "Products", route: "Products" },
    { label: "Services", route: "Services" },
    { label: "About Us", route: "About" },
    { label: "Contact Us", route: "Contact" },
  ];

  return (
    <View style={styles.header}>
      {/* Left: Logo + Brand */}
      <View style={styles.brandRow}>
        <Image source={logo} style={styles.logoImg} resizeMode="contain" />
        <Text style={styles.logoText}>Dexora-India</Text>
      </View>

      {/* Center: Nav Links */}
      <View style={styles.navLinks}>
        {menuItems.map((item) => (
          <HoverLink
            key={item.route}
            label={item.label}
            onPress={() => navigation.navigate(item.route)}
          />
        ))}
      </View>

      {/* Right: Shop Button */}
      <Pressable style={styles.shopBtn} onPress={() => navigation.navigate("Products")}>
        <Text style={styles.shopText}>Shop Now</Text>
      </Pressable>
    </View>
  );
}

function HoverLink({ label, onPress }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={({ pressed }) => [styles.linkContainer, pressed && { opacity: 0.6 }]}
    >
      <Text
        style={[
          styles.link,
          hovered && Platform.OS === "web" && styles.linkHover,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  brandRow: { flexDirection: "row", alignItems: "center" },
  logoImg: { width: 40, height: 40, marginRight: 8 },
  logoText: { fontSize: 22, fontWeight: "bold", color: "#0A657E" },
  navLinks: { flexDirection: "row" },
  linkContainer: { marginHorizontal: 20 },
  link: { fontSize: 16, color: "#444" },
  linkHover: { color: "#0A657E", textDecorationLine: "underline" },
  shopBtn: {
    backgroundColor: "#0A657E",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  shopText: { color: "#fff", fontWeight: "600" },
});
