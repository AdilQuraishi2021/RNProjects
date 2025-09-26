// screens/ProductDetails.js
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { Colors } from "../Style/Theme";
import { useRoute } from "@react-navigation/native";

export default function ProductDetails() {
  const route = useRoute();
  const product = route.params?.product || {};

  return (
    <View style={{ flex: 1 }}>
      <Header title={product.name || "Product"} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: product.img }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.paragraph}>
            This is a detailed description of the product. You can add specs, materials, sizes, and pricing here.
          </Text>

          <Text style={styles.sub}>Specifications</Text>
          <View style={styles.specList}>
            <Text>• Frame Material: Aluminium</Text>
            <Text>• Glass Type: Tempered</Text>
            <Text>• Warranty: 5 years</Text>
          </View>

          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Request Quote</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 30 },
  image: { width: "100%", height: 260 },
  content: { padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 8, color: Colors.text },
  paragraph: { color: "#555", lineHeight: 20, marginBottom: 12 },
  sub: { fontWeight: "700", marginTop: 10, marginBottom: 8 },
  specList: { marginLeft: 6, marginBottom: 18 },
  cta: { backgroundColor: Colors.primary, padding: 12, borderRadius: 8, alignItems: "center" },
  ctaText: { color: "#fff", fontWeight: "700" },
});
