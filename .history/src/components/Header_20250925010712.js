// src/components/Header.js
import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
      <View style={styles.navLinks}>
        {menuItems.map((item) => (
          <HoverLink
            key={item.route}
            label={item.label}
            onPress={() => navigation.navigate(item.route)}
          />
        ))}
      </View>
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
      style={({ pressed }) => [
        styles.linkContainer,
        pressed && { opacity: 0.6 },
      ]}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  navLinks: { flexDirection: "row" },
  linkContainer: { marginHorizontal: 12 },
  link: {
    fontSize: 16,
    color: "#444",
    fontWeight: "500",
  },
  linkHover: {
    color: "#0A657E", // hover color
    textDecorationLine: "underline",
  },
});
