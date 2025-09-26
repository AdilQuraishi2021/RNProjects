// screens/About.tsx
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

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
  const scrollRef = useRef<ScrollView>(null);
  const indexRef = useRef(0);

  // Auto carousel
  useEffect(() => {
    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % carouselImages.length;
      scrollRef.current?.scrollTo({ x: width * indexRef.current, animated: true });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Team slider
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
        {/* Section 1: Carousel */}
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

        {/* Section 2: Team Slider */}
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

        {/* Section 3: Horizontal Vision & Mission */}
        <View style={styles.infoSectionHorizontal}>
  {/* Vision */}
  <View style={styles.infoBoxHorizontal}>
    <MaskedView
      maskElement={
        <Text style={styles.infoTitle}>Vision</Text>
      }
    >
      <LinearGradient
        colors={["#0A657E", "#00CFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.infoTitle, { opacity: 0 }]}>Vision</Text>
      </LinearGradient>
    </MaskedView>

    {[
      "Become the most trusted provider of sustainable architectural solutions for windows and doors.",
      "Redefine modern interiors with designs that merge elegance, functionality, and natural light.",
      "Lead the industry in eco-friendly and energy-efficient innovations.",
      "Inspire living and working spaces that connect people with nature and improve everyday comfort.",
      "Set a benchmark for quality craftsmanship and timeless design worldwide.",
    ].map((line, idx) => (
      <Text key={idx} style={styles.bulletText}>• {line}</Text>
    ))}
  </View>

  {/* Mission */}
  <View style={styles.infoBoxHorizontal}>
    <MaskedView
      maskElement={
        <Text style={styles.infoTitle}>Mission</Text>
      }
    >
      <LinearGradient
        colors={["#0A657E", "#00CFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.infoTitle, { opacity: 0 }]}>Mission</Text>
      </LinearGradient>
    </MaskedView>

    {[
      "Design and supply premium windows and doors tailored to every client’s unique space.",
      "Deliver uncompromising quality, durability, and exceptional design in every product.",
      "Use eco-conscious materials and advanced technology to reduce environmental impact.",
      "Provide seamless installation and outstanding after-sales support for lasting satisfaction.",
      "Continuously innovate and collaborate with architects, designers, and homeowners to meet evolving needs.",
    ].map((line, idx) => (
      <Text key={idx} style={styles.bulletText}>• {line}</Text>
    ))}
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

  /* --- Horizontal Mission & Vision --- */
  infoSectionHorizontal: {
  flexDirection: "row",
  padding: 20,
  justifyContent: "space-between",
},
infoBoxHorizontal: {
  flex: 1,
  backgroundColor: "#fefefe",
  borderRadius: 12,
  padding: 16,
  marginHorizontal: 5,
  borderWidth: 1,
  borderColor: "#e5e5e5",
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 6,
  elevation: 2,
},
infoTitle: {
  fontSize: 22,
  fontWeight: "800",
  marginBottom: 12,
},
bulletText: {
  fontSize: 15,
  lineHeight: 22,
  color: "#555",
  marginBottom: 6,
},

});
