// screens/Services.js
import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { Colors } from "../Style/Theme";

const services = [
  { id: "s1", title: "Custom Window Design", desc: "Design assistance and CAD drawings." },
  { id: "s2", title: "Installation", desc: "Professional installation by certified teams." },
  { id: "s3", title: "Repair & Maintenance", desc: "Glass replacement, frame repair, sealing." },
];

export default function Services() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.intro}>We provide a full range of services to suit your home or commercial needs.</Text>
        {services.map((s) => (
          <View key={s.id} style={styles.card}>
            <Text style={styles.cardTitle}>{s.title}</Text>
            <Text style={styles.cardDesc}>{s.desc}</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  intro: { fontSize: 16, marginBottom: 14, color: "#444" },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  cardTitle: { fontWeight: "700", fontSize: 16, marginBottom: 6, color: Colors.primary },
  cardDesc: { color: "#666", marginBottom: 10 },
  btn: { alignSelf: "flex-start", backgroundColor: Colors.primary, padding: 8, borderRadius: 6 },
  btnText: { color: "#fff", fontWeight: "700" },
});
