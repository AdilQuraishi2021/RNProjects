// screens/About.tsx
import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import { Colors } from "../Style/Theme";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const carouselImages = [
  require("../../assets/bg2.jpg"),
  require("../../assets/bg3.jpg"),
  require("../../assets/bg4.jpg"),
];

const teamMembers = [
  { id: "1", name: "Alice", role: "Architect", img: { uri: "https://i.pravatar.cc/100?img=11" } },
  { id: "2", name: "Bob", role: "Engineer",  img: { uri: "https://i.pravatar.cc/100?img=12" } },
  { id: "3", name: "Charlie", role: "Installer", img: { uri: "https://i.pravatar.cc/100?img=13" } },
];

export default function About() {
  // --- Auto image carousel ---
  const scrollRef = useRef<ScrollView>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % carouselImages.length;
      scrollRef.current?.scrollTo({ x: width * indexRef.current, animated: true });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // --- Infinite team slider ---
  const translateX = useRef(new Animated.Value(0)).current;
  const teamWidth = teamMembers.length * 140;
  useEffect(() => {
    const loop = () => {
      translateX.setValue(0);
      Animated.timing(translateX, {
        toValue: -teamWidth,
        duration: teamWidth * 50,
        useNativeDriver: true,
      }).start(() => loop());
    };
    loop();
  }, [teamWidth]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* -------- 1. Auto Carousel -------- */}
        <View style={styles.carouselContainer}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {carouselImages.map((img, idx) => (
              <Image key={idx} source={img} style={styles.carouselImage} />
            ))}
          </ScrollView>
        </View>

        {/* -------- 2. Infinite Team Slider -------- */}
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <View style={{ overflow: "hidden", height: 180 }}>
            <Animated.View
              style={{ flexDirection: "row", transform: [{ translateX }] }}
            >
              {[...teamMembers, ...teamMembers].map((m, idx) => (
                <View key={idx} style={styles.memberCard}>
                  <Image source={m.img} style={styles.memberImg} />
                  <Text style={styles.memberName}>{m.name}</Text>
                  <Text style={styles.memberRole}>{m.role}</Text>
                </View>
              ))}
            </Animated.View>
          </View>
        </View>

        {/* -------- 3. Mission & Vision Section -------- */}
        <View style={styles.infoSection}>
          {/* Vision Box */}
          <View style={styles.infoBox}>
            <View style={styles.glowHeader}>
              <MaterialCommunityIcons name="eye-outline" size={22} color="#fff" />
              <Text style={styles.glowHeaderText}>Vision</Text>
            </View>
            <Text style={styles.paragraph}>
              To be the most trusted provider of sustainable architectural
              solutions that elevate every living and working space.
            </Text>
          </View>

          {/* Mission Box */}
          <View style={styles.infoBox}>
            <View style={styles.glowHeader}>
              <MaterialCommunityIcons name="rocket-launch" size={22} color="#fff" />
              <Text style={styles.glowHeaderText}>Mission</Text>
            </View>
            <Text style={styles.paragraph}>
              We design and supply premium windows and doors tailored to your
              space, focusing on quality, durability and exceptional design.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: { height: 250, backgroundColor: "#000" },
  carouselImage: { width, height: 250, resizeMode: "cover" },

  teamSection: { paddingVertical: 25, backgroundColor: "#f9fafc" },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 20,
  },
  memberCard: { width: 120, marginHorizontal: 10, alignItems: "center" },
  memberImg: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  memberName: { fontWeight: "600", fontSize: 16, color: "#333" },
  memberRole: { fontSize: 13, color: "#666" },

  /* --- New Mission & Vision Boxes --- */
  infoSection: {
    padding: 20,
    backgroundColor: "#fff",
  },
  infoBox: {
    backgroundColor: "#fefefe",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  glowHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary || "#0A657E",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: Colors.primary || "#0A657E",
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 5,
  },
  glowHeaderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
    textShadowColor: "#0A657E",
    textShadowRadius: 6,
  },
  paragraph: {
    color: "#555",
    lineHeight: 20,
    fontSize: 15,
  },
});
