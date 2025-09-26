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
  Platform,
} from "react-native";
import { Colors, FontSizes, Fonts, Typography } from "../Style/Theme";
import Header from "../components/Header";

const products = [
  {
    id: "1",
    name: "Aluminium Sliding Patio Door",
    img: "https://images.unsplash.com/photo-1595526114035-3a9e1a70d0f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "White Vinyl Casement Window",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Brown Wood Frame Window",
    img: "https://images.unsplash.com/photo-1584622652345-b5d2f1d84261?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Black Modern Window",
    img: "https://images.unsplash.com/photo-1505691723518-36aefc0ba55e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    name: "Classic White Frame Window",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    name: "Dark Brown Sliding Window",
    img: "https://images.unsplash.com/photo-1600585154164-5945e26c89b4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "7",
    name: "French Style Door",
    img: "https://images.unsplash.com/photo-1565182999561-18d8c0e3fef8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "8",
    name: "Grey Minimalist Window",
    img: "https://images.unsplash.com/photo-1600585154180-71d1d66b4a0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "9",
    name: "Rustic Wood Door",
    img: "https://images.unsplash.com/photo-1556912998-6a321d51150e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "10",
    name: "Frosted Glass Window",
    img: "https://images.unsplash.com/photo-1581261082343-4e1b10907b6c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "11",
    name: "Industrial Black Frame",
    img: "https://images.unsplash.com/photo-1618221283181-cc77f2f0044d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "12",
    name: "Modern Patio Door",
    img: "https://images.unsplash.com/photo-1600585154190-5e1ec353f64f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "13",
    name: "Victorian Style Window",
    img: "https://images.unsplash.com/photo-1600607687967-90d6fbe7e5ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "14",
    name: "Slim Black Window Frame",
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "15",
    name: "White Wooden Shutters",
    img: "https://images.unsplash.com/photo-1595526114435-f999d52d37c0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "16",
    name: "Large Picture Window",
    img: "https://images.unsplash.com/photo-1505691939029-53e1ee1f7232?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "17",
    name: "Double Hung Window",
    img: "https://images.unsplash.com/photo-1584622652356-c24b2b0fef8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "18",
    name: "Sliding Glass Door",
    img: "https://images.unsplash.com/photo-1618219502886-cd106c912f84?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "19",
    name: "Curved Frame Window",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "20",
    name: "Panoramic Bay Window",
    img: "https://images.unsplash.com/photo-1505691723792-bf8c1f7a1f09?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* GLOBAL HEADER */}
      <Header />

      <View style={styles.body}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <SidebarFilter onApply={handleApply} />
          {/* Your product list / grid here */}
        </View>

        {/* -------- PRODUCTS GRID -------- */}
        <ScrollView style={styles.products}>
          <Text style={styles.allProducts}>All Products</Text>
          <View style={styles.grid}>
            {products.map((p) => (
              <View key={p.id} style={styles.card}>
                <Image source={{ uri: p.img }} style={styles.productImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.productName}>{p.name}</Text>
                  <TouchableOpacity style={styles.cardBtn}>
                    <Text style={styles.cardBtnText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/* ------------------- FILTER SECTION ------------------- */
function FilterSection({ title, options }) {
  return (
    <View style={styles.filterSectionBlock}>
      <Text style={styles.filterSectionTitle}>{title}</Text>
      {options.map((opt) => (
        <Text key={opt} style={styles.filterItem}>
          ☐ {opt}
        </Text>
      ))}
    </View>
  );
}

/* ------------------- STYLES ------------------- */
const { width } = Dimensions.get("window");
const isLarge = width > 900;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background || "#f5f5f5",
  },

  body: {
    flex: 1,
    flexDirection: "row",
  },

  /* ---- Sidebar ---- */
  sidebarWrapper: {
    width: isLarge ? 260 : 200,
    backgroundColor: "#fff",
    padding: 16,
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: { elevation: 4 },
      web: { boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
    }),
  },
  sidebarInner: {
    paddingBottom: 24,
  },
  sidebarTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.primary || "#0A657E",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 8,
    textAlign: "center",
  },
  filterSectionBlock: { marginBottom: 20 },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  filterItem: {
    fontSize: 15,
    paddingVertical: 4,
    paddingLeft: 4,
    color: "#555",
  },
  viewBtn: {
    marginTop: 10,
    backgroundColor: Colors.primary || "#0A657E",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  viewBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  /* ---- Products Grid ---- */
  products: {
    flex: 1,
    padding: 20,
  },
  allProducts: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: Colors.text || "#222",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: isLarge ? "30%" : "47%",
    marginBottom: 20,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
      },
      android: { elevation: 3 },
      web: { boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
    }),
  },
  productImage: {
    width: "100%",
    height: 160,
  },
  cardContent: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  cardBtn: {
    backgroundColor: Colors.primary || "#0A657E",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  cardBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
