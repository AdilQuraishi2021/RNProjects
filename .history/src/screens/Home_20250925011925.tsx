import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Header from "../components/Header";

const products = [
  // … (use the same 20-item array you already have)
  { id: "1",  name: "Aluminium Sliding Patio Door",
    img: "https://images.unsplash.com/photo-1595526114035-3a9e1a70d0f1?auto=format&fit=crop&w=600&q=80" },
  // (rest of your products unchanged)
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.body}>
        {/* Sidebar Filters */}
        <ScrollView style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Filter by:</Text>
          <Text style={styles.filterSection}>Type</Text>
          {["Sliding", "Casement"].map((t) => (
            <Text key={t} style={styles.filterItem}>☐ {t}</Text>
          ))}

          <Text style={styles.filterSection}>Material</Text>
          {["Aluminium", "Wood", "Vinyl"].map((m) => (
            <Text key={m} style={styles.filterItem}>☐ {m}</Text>
          ))}

          <Text style={styles.filterSection}>Size</Text>
          {["Standard", "Custom"].map((s) => (
            <Text key={s} style={styles.filterItem}>☐ {s}</Text>
          ))}

          <TouchableOpacity style={styles.viewBtn}>
            <Text style={styles.viewBtnText}>View Results</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Product Grid */}
        <ScrollView style={styles.products}>
          <Text style={styles.allProducts}>All Products</Text>
          <View style={styles.grid}>
            {products.map((p) => (
              <View key={p.id} style={styles.card}>
                <Image source={{ uri: p.img }} style={styles.productImage} />
                <Text style={styles.productName}>{p.name}</Text>
                <TouchableOpacity style={styles.cardBtn}>
                  <Text style={styles.cardBtnText}>View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");
const isLarge = width > 900;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7" },
  body: { flex: 1, flexDirection: "row" },
  sidebar: {
    width: isLarge ? 220 : 160,
    backgroundColor: "#fff",
    padding: 15,
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
  },
  sidebarTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  filterSection: { marginTop: 20, fontWeight: "600", fontSize: 16 },
  filterItem: { marginTop: 8, color: "#333" },
  viewBtn: {
    marginTop: 30,
    backgroundColor: "#0A657E",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  viewBtnText: { color: "#fff", fontWeight: "600" },

  products: { flex: 1, padding: 20 },
  allProducts: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: isLarge ? "30%" : "47%",
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: { width: "100%", height: 150 },
  productName: { padding: 10, fontSize: 16, fontWeight: "500", color: "#333" },
  cardBtn: {
    backgroundColor: "#0A657E",
    padding: 10,
    alignItems: "center",
  },
  cardBtnText: { color: "#fff", fontWeight: "600" },
});
