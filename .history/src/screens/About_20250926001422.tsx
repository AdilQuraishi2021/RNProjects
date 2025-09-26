// screens/About.tsx
import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Animated,
} from "react-native";
import Header from "../components/Header";
import { Colors } from "../Style/Theme";

const { width } = Dimensions.get("window");

// ---- Replace with your own images ----
const carouselImages = [
  require("../../assets/bg2.jpg"),
  require("../../assets/bg3.jpg"),
  require("../../assets/bg4.jpg"),
];

// ---- Team data ----
const teamMembers = [
  { id: "1", name: "Alice", role: "Architect", img: require("../../assets/team1.jpg") },
  { id: "2", name: "Bob", role: "Engineer", img: require("../../assets/team2.jpg") },
  { id: "3", name: "Charlie", role: "Installer", img: require("../../assets/team3.jpg") },
];

export default function About() {
  // ---------- Auto Image Slider ----------
  const scrollRef = useRef<ScrollView>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % carouselImages.length;
      scrollRef.current?.scrollTo({
        x: width * indexRef.current,
        animated: true,
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // ---------- Continuous Team Slider ----------
  const translateX = useRef(new Animated.Value(0)).current;
  const teamWidth = teamMembers.length * 140; // 120 card + 20 gap
  useEffect(() => {
    const loop = () => {
      translateX.setValue(0);
      Animated.timing(translateX, {
        toValue: -teamWidth,
        duration: teamWidth * 50, // speed: bigger = slower
        useNativeDriver: true,
      }).start(() => loop());
    };
    loop();
  }, [teamWidth]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* -------- Section 1 : Auto Carousel -------- */}
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

        {/* -------- Section 2 : Infinite Team Slider -------- */}
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <View style={{ overflow: "hidden", height: 180 }}>
            <Animated.View
              style={{
                flexDirection: "row",
                transform: [{ translateX }],
              }}
            >
              {/* Duplicate array so it loops seamlessly */}
              {[...teamMembers, ...teamMembers].map((member, idx) => (
                <View key={idx} style={styles.memberCard}>
                  <Image source={member.img} style={styles.memberImg} />
                  <Text style={styles.memberName}>{member.name}</Text>
                  <Text style={styles.memberRole}>{member.role}</Text>
                </View>
              ))}
            </Animated.View>
          </View>
        </View>

        {/* -------- Section 3 : Mission & Vision -------- */}
        <View style={styles.infoSection}>
          <Text style={styles.head}>Our Mission</Text>
          <Text style={styles.paragraph}>
            We design and supply premium windows and doors tailored to your space. 
            Our focus is quality, durability, and design.
          </Text>

          <Text style={styles.head}>Our Vision</Text>
          <Text style={styles.paragraph}>
            To be the most trusted provider of sustainable architectural solutions 
            that elevate every living and working space.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: 250,
    backgroundColor: "#000",
  },
  carouselImage: {
    width,
    height: 250,
    resizeMode: "cover",
  },
  teamSection: {
    paddingVertical: 25,
    backgroundColor: "#f9fafc",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 20,
  },
  memberCard: {
    width: 120,
    marginHorizontal: 10,
    alignItems: "center",
  },
  memberImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  memberName: {
    fontWeight: "600",
    fontSize: 16,
    color: "#333",
  },
  memberRole: {
    fontSize: 13,
    color: "#666",
  },
  infoSection: {
    padding: 20,
  },
  head: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    color: Colors.primary,
  },
  paragraph: {
    color: "#555",
    marginBottom: 20,
    lineHeight: 20,
    fontSize: 15,
  },
});
