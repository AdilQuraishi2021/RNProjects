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
import {colors, Fontsizes, Fonts, }
const products = [
  { id: "1",  name: "Aluminium Sliding Patio Door", img: "https://images.unsplash.com/photo-1595526114035-3a9e1a70d0f1?auto=format&fit=crop&w=600&q=80" },
  { id: "2",  name: "White Vinyl Casement Window",  img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" },
  { id: "3",  name: "Brown Wood Frame Window",      img: "https://images.unsplash.com/photo-1584622652345-b5d2f1d84261?auto=format&fit=crop&w=600&q=80" },
  { id: "4",  name: "Black Modern Window",          img: "https://images.unsplash.com/photo-1505691723518-36aefc0ba55e?auto=format&fit=crop&w=600&q=80" },
  { id: "5",  name: "Classic White Frame Window",   img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { id: "6",  name: "Dark Brown Sliding Window",    img: "https://images.unsplash.com/photo-1600585154164-5945e26c89b4?auto=format&fit=crop&w=600&q=80" },
  { id: "7",  name: "French Style Door",           img: "https://images.unsplash.com/photo-1565182999561-18d8c0e3fef8?auto=format&fit=crop&w=600&q=80" },
  { id: "8",  name: "Grey Minimalist Window",      img: "https://images.unsplash.com/photo-1600585154180-71d1d66b4a0a?auto=format&fit=crop&w=600&q=80" },
  { id: "9",  name: "Rustic Wood Door",            img: "https://images.unsplash.com/photo-1556912998-6a321d51150e?auto=format&fit=crop&w=600&q=80" },
  { id: "10", name: "Frosted Glass Window",        img: "https://images.unsplash.com/photo-1581261082343-4e1b10907b6c?auto=format&fit=crop&w=600&q=80" },
  { id: "11", name: "Industrial Black Frame",      img: "https://images.unsplash.com/photo-1618221283181-cc77f2f0044d?auto=format&fit=crop&w=600&q=80" },
  { id: "12", name: "Modern Patio Door",           img: "https://images.unsplash.com/photo-1600585154190-5e1ec353f64f?auto=format&fit=crop&w=600&q=80" },
  { id: "13", name: "Victorian Style Window",      img: "https://images.unsplash.com/photo-1600607687967-90d6fbe7e5ff?auto=format&fit=crop&w=600&q=80" },
  { id: "14", name: "Slim Black Window Frame",     img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=600&q=80" },
  { id: "15", name: "White Wooden Shutters",       img: "https://images.unsplash.com/photo-1595526114435-f999d52d37c0?auto=format&fit=crop&w=600&q=80" },
  { id: "16", name: "Large Picture Window",        img: "https://images.unsplash.com/photo-1505691939029-53e1ee1f7232?auto=format&fit=crop&w=600&q=80" },
  { id: "17", name: "Double Hung Window",          img: "https://images.unsplash.com/photo-1584622652356-c24b2b0fef8e?auto=format&fit=crop&w=600&q=80" },
  { id: "18", name: "Sliding Glass Door",          img: "https://images.unsplash.com/photo-1618219502886-cd106c912f84?auto=format&fit=crop&w=600&q=80" },
  { id: "19", name: "Curved Frame Window",         img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" },
  { id: "20", name: "Panoramic Bay Window",        img: "https://images.unsplash.com/photo-1505691723792-bf8c1f7a1f09?auto=format&fit=crop&w=600&q=80" },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>Dexora-India</Text>
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
