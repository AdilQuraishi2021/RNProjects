// screens/Products.js
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import Header from "../components/Header";
import { Colors } from "../Style/Theme";
import { useNavigation } from "@react-navigation/native";

const products = [
  // re-use sample items (or import from a shared file)
  { id: "1", name: "Aluminium Sliding Patio Door", img: "https://images.unsplash.com/photo-1595526114035-3a9e1a70d0f1?auto=format&fit=crop&w=600&q=80" },
  { id: "2", name: "White Vinyl Casement Window", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" },
];

export default function Products() {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {products.map((p) => (
          <TouchableOpacity key={p.id} style={styles.productRow} onPress={() => console.log("PP")}>
            <Image source={{ uri: p.img }} style={styles.thumb} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.desc}>High-quality frame, suitable for modern homes.</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { padding: 20 },
  productRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },
  thumb: { width: 90, height: 70, borderRadius: 6 },
  name: { fontWeight: "700", fontSize: 16, color: Colors.text },
  desc: { color: "#666", marginTop: 4 },
});
