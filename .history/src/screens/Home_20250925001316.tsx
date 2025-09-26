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

const products = [
  {
    id: "1",
    name: "Aluminium Sliding Patio Door",
    img: "https://images.unsplash.com/photo-1595526114035-3a9e1a70d0f1?w=400",
  },
  {
    id: "2",
    name: "White Vinyl Casement Window",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400",
  },
  {
    id: "3",
    name: "Brown Wood Frame Window",
    img: "https://images.unsplash.com/photo-1584622652345-b5d2f1d84261?w=400",
  },
  {
    id: "4",
    name: "Black Modern Window",
    img: "https://images.unsplash.com/photo-1505691723518-36aefc0ba55e?w=400",
  },
  {
    id: "5",
    name: "Classic White Frame Window",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
  },
  {
    id: "6",
    name: "Dark Brown Sliding Window",
    img: "https://images.unsplash.com/photo-1600585154164-5945e26c89b4?w=400",
  },
  {
    id: "7",
    name: "French Style Door",
    img: "https://images.unsplash.com/photo-1565182999561-18d8c0e3fef8?w=400",
  },
  {
    id: "8",
    name: "Grey Minimalist Window",
    img: "https://images.unsplash.com/photo-1600585154180-71d1d66b4a0a?w=400",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>APERTURE</Text>
        <View style={styles.navLinks}>
          <Text style={styles.link}>Home</Text>
          <Text style={styles.link}>Products</Text>
          <Text style={styles.link}>Services</Text>
          <Text style={styles.link}>About Us</Text>
        </View>
        <TouchableOpacity style={styles.shopBtn}>
          <Text style={styles.shopText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* BODY */}
      <View style={styles.body}>
        {/* SIDEBAR FILTER */}
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

        {/* PRODUCTS GRID */}
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
const isLarge = width > 900; // simple responsive tweak

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  logo: { fontSize: 22, fontWeight: "bold", color: "#0A657E" },
  navLinks: { flexDirection: "row" },
  link: { marginHorizontal: 10, fontSize: 16, color: "#444" },
  shopBtn: {
    backgroundColor: "#0A657E",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  shopText: { color: "#fff", fontWeight: "600" },

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
