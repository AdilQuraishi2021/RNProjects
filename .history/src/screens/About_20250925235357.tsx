import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import Header from "../components/Header";
import { Colors } from "../Style/Theme";

const { width } = Dimensions.get("window");

/* ---------- Dummy Data ---------- */
const sliderImages = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200",
  "https://images.unsplash.com/photo-1584622652345-b5d2f1d84261?w=1200",
  "https://images.unsplash.com/photo-1618221283181-cc77f2f0044d?w=1200",
];

const team = [
  {
    name: "Aditi Sharma",
    role: "Lead Architect",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Project Engineer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sophia Patel",
    role: "Design Head",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Arjun Mehra",
    role: "Installer",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

export default function About() {
  /* ----- Image slider auto-scroll ----- */
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % sliderImages.length;
      sliderRef.current?.scrollToIndex({ index: next, animated: true });
      setIndex(next);
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ---------- 1. HERO IMAGE SLIDER ---------- */}
        <View style={styles.sliderContainer}>
          <FlatList
            ref={sliderRef}
            data={sliderImages}
            keyExtractor={(item, idx) => idx.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.sliderImage} />
            )}
          />
          <View style={styles.dots}>
            {sliderImages.map((_, i) => {
              const opacity = scrollX.interpolate({
                inputRange: [(i - 1) * width, i * width, (i + 1) * width],
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp",
              });
              return <Animated.View key={i} style={[styles.dot, { opacity }]} />;
            })}
          </View>
        </View>

        {/* ---------- 2. TEAM CAROUSEL ---------- */}
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <FlatList
            data={team}
            keyExtractor={(item, idx) => idx.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
              <View style={styles.memberCard}>
                <Image source={{ uri: item.img }} style={styles.memberImg} />
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.memberRole}>{item.role}</Text>
              </View>
            )}
          />
        </View>

        {/* ---------- 3. COMPANY DETAILS ---------- */}
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            We design and supply premium windows and doors tailored to your
            space. Our focus is quality, durability, and stunning design that
            transforms your home or office.
          </Text>

          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text style={styles.paragraph}>
            To be the most trusted brand in architectural openings, bringing
            innovation and sustainability to every project we touch.
          </Text>

          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <Text style={styles.paragraph}>
            ✓ Experienced engineers & designers{"\n"}
            ✓ Transparent pricing & warranty{"\n"}
            ✓ Professional installation & after-sales support
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  sliderContainer: {
    width,
    height: 240,
    backgroundColor: "#000",
  },
  sliderImage: {
    width,
    height: 240,
    resizeMode: "cover",
  },
  dots: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 4,
  },
  teamSection: {
    marginTop: 30,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.primary || "#0A657E",
    textAlign: "center",
    marginBottom: 16,
  },
  memberCard: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 16,
    alignItems: "center",
    padding: 14,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  memberImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  memberName: { fontSize: 16, fontWeight: "600", color: "#333" },
  memberRole: { fontSize: 14, color: "#666", marginTop: 2 },
  detailsSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
    marginBottom: 18,
    textAlign: "justify",
  },
});
