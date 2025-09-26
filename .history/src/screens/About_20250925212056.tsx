// screens/About.js
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { Colors } from "../Style/Theme";

export default function About() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.head}>Our mission</Text>
        <Text style={styles.paragraph}>
          We design and supply premium windows and doors tailored to your space. Our focus is quality,
          durability, and design.
        </Text>

        <Text style={styles.head}>Why choose us</Text>
        <Text style={styles.paragraph}>
          Experienced engineers, transparent pricing, warranty-backed products and professional installation.
        </Text>

        <Text style={styles.head}>Our Team</Text>
        <Text style={styles.paragraph}>A small team of architects, engineers and installers dedicated to excellence.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  head: { fontSize: 18, fontWeight: "700", marginBottom: 8, color: Colors.primary },
  paragraph: { color: "#555", marginBottom: 14, lineHeight: 20 },
});
