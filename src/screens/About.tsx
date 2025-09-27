import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  Platform,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
import { Colors } from "../Style/Theme";
import Header from "../components/Header";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const carouselImages = [
  require("../../assets/bg2.jpg"),
  require("../../assets/bg3.jpg"),
  require("../../assets/bg4.jpg"),
];

const teamMembers = [
  {
    id: "1",
    name: "Alice",
    role: "Architect",
    img: { uri: "https://i.pravatar.cc/100?img=11" },
  },
  {
    id: "2",
    name: "Bob",
    role: "Engineer",
    img: { uri: "https://i.pravatar.cc/100?img=12" },
  },
  {
    id: "3",
    name: "Charlie",
    role: "Installer",
    img: { uri: "https://i.pravatar.cc/100?img=13" },
  },
  {
    id: "4",
    name: "Joy",
    role: "Designer",
    img: { uri: "https://i.pravatar.cc/100?img=11" },
  },
  {
    id: "5",
    name: "Eve",
    role: "Manager",
    img: { uri: "https://i.pravatar.cc/100?img=11" },
  },
];

const socialMediaLinks = [
  {
    icon: <FontAwesome name="facebook" size={30} color="#2d4373" />,
    url: "https://facebook.com",
  },
  {
    icon: <FontAwesome name="instagram" size={30} color="#992366" />,
    url: "https://instagram.com",
  },
  {
    icon: <FontAwesome name="linkedin" size={30} color="#084d7a" />,
    url: "https://linkedin.com",
  },
  {
    icon: <FontAwesome name="twitter" size={30} color="#0d95e8" />,
    url: "https://twitter.com",
  },
];

const branches = [
  { city: "New York", address: "123 Main Street, NY 10001" },
  { city: "Los Angeles", address: "456 Sunset Blvd, LA 90001" },
  { city: "Chicago", address: "789 Lake Shore Drive, Chicago 60601" },
];

export default function About() {
  const scrollRef = useRef<ScrollView>(null);
  const indexRef = useRef(0);

  // Auto carousel
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

  // Hover animation values
  const visionHover = useRef(new Animated.Value(0)).current;
  const missionHover = useRef(new Animated.Value(0)).current;
  const socialHover = socialMediaLinks.map(
    () => useRef(new Animated.Value(0)).current
  );
  const branchHover = branches.map(() => useRef(new Animated.Value(0)).current);

  const handleHover = (anim: Animated.Value, hover: boolean) => {
    Animated.spring(anim, {
      toValue: hover ? 1 : 0,
      useNativeDriver: false,
      friction: 5,
      tension: 150,
    }).start();
  };

  // Color interpolation for Vision & Mission heading
  const visionColor = visionHover.interpolate({
    inputRange: [0, 1],
    outputRange: ["#222", Colors.primary],
  });
  const missionColor = missionHover.interpolate({
    inputRange: [0, 1],
    outputRange: ["#222", Colors.primary],
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Carousel */}
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

        {/* Team Slider */}
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

        {/* Vision Section */}
        <View
          style={styles.infoSectionRow}
          {...(Platform.OS === "web"
            ? {
                onMouseEnter: () => handleHover(visionHover, true),
                onMouseLeave: () => handleHover(visionHover, false),
              }
            : {})}
        >
          <Animated.View
            style={[
              styles.infoBoxRow,
              {
                transform: [
                  {
                    translateY: visionHover.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -10],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.infoText}>
              <Animated.Text style={[styles.infoTitle, { color: visionColor }]}>
                Vision
              </Animated.Text>
              <Text style={styles.bulletText}>
                • Become the most trusted provider of sustainable architectural
                solutions.
              </Text>
              <Text style={styles.bulletText}>
                • Redefine modern interiors merging elegance and functionality.
              </Text>
            </View>
            <View style={styles.stylishWrapper}>
              <Image
                source={require("../../assets/bg2.jpg")}
                style={styles.stylishImage}
              />
            </View>
          </Animated.View>
        </View>

        {/* Mission Section */}
        <View
          style={styles.infoSectionRow}
          {...(Platform.OS === "web"
            ? {
                onMouseEnter: () => handleHover(missionHover, true),
                onMouseLeave: () => handleHover(missionHover, false),
              }
            : {})}
        >
          <Animated.View
            style={[
              styles.infoBoxRow,
              {
                transform: [
                  {
                    translateY: missionHover.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -10],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.stylishWrapper}>
              <Image
                source={require("../../assets/bg2.jpg")}
                style={styles.stylishImage}
              />
            </View>
            <View style={styles.infoText}>
              <Animated.Text
                style={[styles.infoTitle, { color: missionColor }]}
              >
                Mission
              </Animated.Text>
              <Text style={styles.bulletText}>
                • Supply premium windows and doors tailored to every client.
              </Text>
              <Text style={styles.bulletText}>
                • Deliver uncompromising quality, durability, and design.
              </Text>
            </View>
          </Animated.View>
        </View>

        {/* Social Media Section */}
        <ImageBackground
          source={require("../../assets/socialm.png")}
          style={styles.socialMediaSection}
        >
          <Text style={[styles.sectionTitle, { color: "#1d1e1fff" }]}>
            Follow Us
          </Text>
          <View style={styles.socialIconsContainer}>
            {socialMediaLinks.map((sm, idx) => (
              <Animated.View
                key={idx}
                style={{
                  transform: [
                    {
                      translateY: socialHover[idx].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -10],
                      }),
                    },
                  ],
                }}
              >
                <TouchableOpacity
                  onPress={() => Linking.openURL(sm.url)}
                  {...(Platform.OS === "web"
                    ? {
                        onMouseEnter: () => handleHover(socialHover[idx], true),
                        onMouseLeave: () =>
                          handleHover(socialHover[idx], false),
                      }
                    : {})}
                  style={{ marginHorizontal: 15 }}
                >
                  {sm.icon}
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </ImageBackground>

        {/* Branches Section */}
        <View style={styles.branchesSection}>
          <Text style={[styles.sectionTitle, { textAlign: "left" }]}>
            Our Branches
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {branches.map((b, idx) => (
              <Animated.View
                key={idx}
                style={[
                  styles.branchCard,
                  {
                    transform: [
                      {
                        translateY: branchHover[idx].interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -10],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <TouchableOpacity
                  {...(Platform.OS === "web"
                    ? {
                        onMouseEnter: () => handleHover(branchHover[idx], true),
                        onMouseLeave: () =>
                          handleHover(branchHover[idx], false),
                      }
                    : {})}
                >
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={30}
                    color={Colors.primary}
                  />
                  <Text style={styles.branchCity}>{b.city}</Text>
                  <Text style={styles.branchAddress}>{b.address}</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>
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

  infoSectionRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fefefe",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  infoText: { flex: 1, paddingHorizontal: 10 },
  infoTitle: { fontSize: 22, fontWeight: "800", marginBottom: 12 },
  bulletText: { fontSize: 15, lineHeight: 22, color: "#555", marginBottom: 6 },

  stylishWrapper: {
    width: 140,
    height: 140,
    overflow: "hidden",
    borderRadius: 30,
    transform: [{ rotate: "5deg" }],
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
    backgroundColor: "#fff",
  },
  stylishImage: {
    width: "120%",
    height: "120%",
    resizeMode: "cover",
    transform: [{ rotate: "-5deg" }],
  },

  socialMediaSection: {
    paddingVertical: 40,
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  branchesSection: { paddingVertical: 25, paddingHorizontal: 20 },
  branchCard: {
    backgroundColor: "#fefefe",
    borderRadius: 12,
    padding: 16,
    marginRight: 15,
    alignItems: "center",
    width: 200,
    height: 140,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  branchCity: { fontSize: 16, fontWeight: "700", marginTop: 8 },
  branchAddress: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 4,
  },
});
