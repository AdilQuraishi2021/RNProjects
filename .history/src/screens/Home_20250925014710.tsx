import React, { useState } from "react";
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
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "../Style/Theme";
import Header from "../components/Header";
import SidebarFilter from "../components/SidebarFilter";

const products = [
  { id: "1", name: "Aluminium Sliding Patio Door", img: "https://images.unsplash.com/photo-1595526114035-3a9e1a70d0f1?auto=format&fit=crop&w=600&q=80" },
  { id: "2", name: "White Vinyl Casement Window", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" },
  // ... all other products
];

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleApply = (filters) => {
    console.log("Selected Filters:", filters);
    // Example filtering: filter by name containing selected type
    const newFiltered = products.filter((p) =>
      filters.type?.length
        ? filters.type.some((t) => p.name.toLowerCase().includes(t.toLowerCase()))
        : true
    );
    setFilteredProducts(newFiltered);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setUploadedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.body}>
        <SidebarFilter onApply={handleApply} />

        <ScrollView style={styles.products}>
          {/* -------- Custom Board / Upload Section -------- */}
          <View style={styles.customBoard}>
            <Text style={styles.customBoardTitle}>Your Custom Board</Text>

            {uploadedImage ? (
              <Image source={{ uri: uploadedImage }} style={styles.uploadedImage} />
            ) : (
              <Text style={styles.uploadPlaceholder}>No image uploaded</Text>
            )}

            <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
              <Text style={styles.uploadBtnText}>
                {uploadedImage ? "Change Image" : "Upload Image"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* -------- Products Grid -------- */}
          <Text style={styles.allProducts}>All Products</Text>
          <View style={styles.grid}>
            {filteredProducts.map((p) => (
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

/* ------------------- STYLES ------------------- */
const { width } = Dimensions.get("window");
const isLarge = width > 900;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background || "#f5f5f5",
  },
  body: { flex: 1, flexDirection: "row" },
  products: { flex: 1, padding: 20 },

  /* ---- Custom Board ---- */
  customBoard: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 6, shadowOffset: { width: 0, height: 4 } },
      android: { elevation: 3 },
      web: { boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
    }),
  },
  customBoardTitle: { fontSize: 20, fontWeight: "700", marginBottom: 12, color: Colors.primary || "#0A657E" },
  uploadedImage: { width: "100%", height: 200, borderRadius: 12, marginBottom: 12 },
  uploadPlaceholder: { fontSize: 16, color: "#999", textAlign: "center", marginVertical: 20 },
  uploadBtn: { backgroundColor: Colors.primary || "#0A657E", paddingVertical: 12, borderRadius: 8, alignItems: "center" },
  uploadBtnText: { color: "#fff", fontWeight: "600" },

  /* ---- Products Grid ---- */
  allProducts: { fontSize: 24, fontWeight: "700", marginBottom: 20, color: Colors.text || "#222" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: isLarge ? "30%" : "47%",
    marginBottom: 20,
    overflow: "hidden",
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 6, shadowOffset: { width: 0, height: 4 } },
      android: { elevation: 3 },
      web: { boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
    }),
  },
  productImage: { width: "100%", height: 160 },
  cardContent: { padding: 12 },
  productName: { fontSize: 16, fontWeight: "600", color: "#333", marginBottom: 8 },
  cardBtn: { backgroundColor: Colors.primary || "#0A657E", paddingVertical: 8, borderRadius: 6, alignItems: "center" },
  cardBtnText: { color: "#fff", fontWeight: "600", fontSize: 14 },
});
