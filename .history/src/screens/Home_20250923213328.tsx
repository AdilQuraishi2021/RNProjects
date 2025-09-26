import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 3;

// Using online URLs for images
const heroImage = { uri: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' };
const logoImage = { uri: 'https://i.imgur.com/KqB5D8L.png' }; // Placeholder logo
const product1 = { uri: 'https://images.unsplash.com/photo-1616422899478-f7b5d140b0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' };
const product2 = { uri: 'https://images.unsplash.com/photo-1582234033100-2f3b7d1b3e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' };
const product3 = { uri: 'https://images.unsplash.com/photo-1627447471862-2f0c76d29c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' };
const reviewImage = { uri: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' };

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={logoImage} style={styles.logo} resizeMode="contain" />
          <View style={styles.navContainer}>
            <Text style={styles.navText}>Home</Text>
            <Text style={styles.navText}>Products</Text>
            <Text style={styles.navText}>Services</Text>
            <Text style={styles.navText}>About Us</Text>
            <Text style={styles.navText}>Contact</Text>
          </View>
        </View>

        {/* Hero Section */}
        <ImageBackground source={heroImage} style={styles.heroSection}>
          <View style={styles.overlay}>
            <Text style={styles.heroTitle}>Premium Windows & Doors for Every Home</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.shopNowButton}>
                <Text style={styles.buttonText}>Shop Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.getQuoteButton}>
                <Text style={styles.getQuoteText}>Get a Quote</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* Key Benefits */}
        <View style={styles.benefitsContainer}>
          <View style={styles.benefitCard}>
            <FontAwesome5 name="shield-alt" size={24} color="#0066cc" />
            <Text style={styles.benefitTitle}>Durability</Text>
          </View>
          <View style={styles.benefitCard}>
            <Ionicons name="leaf-outline" size={24} color="#0066cc" />
            <Text style={styles.benefitTitle}>Energy Efficiency</Text>
          </View>
          <View style={styles.benefitCard}>
            <FontAwesome5 name="ruler-combined" size={24} color="#0066cc" />
            <Text style={styles.benefitTitle}>Custom Designs</Text>
          </View>
        </View>

        {/* Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Key Benefits</Text>
          <View style={styles.productRow}>
            <View style={styles.productCard}>
              <Image source={product1} style={styles.productImage} />
              <Text style={styles.productTitle}>Sliding Doors</Text>
              <Text style={styles.productSubtitle}>About Us</Text>
              <Text style={styles.productDescription}>
                A broad range of expertise, vast craft and professional caliber.
              </Text>
            </View>
            <View style={styles.productCard}>
              <Image source={product2} style={styles.productImage} />
              <Text style={styles.productTitle}>Casement Windows</Text>
              <Text style={styles.productSubtitle}>Featured Reviews</Text>
              <Text style={styles.productRating}>★★★★★</Text>
            </View>
            <View style={styles.productCard}>
              <Image source={product3} style={styles.productImage} />
              <Text style={styles.productTitle}>French Doors</Text>
              <Text style={styles.productSubtitle}>Client Reviews</Text>
              <Text style={styles.productRating}>★★★★★</Text>
            </View>
          </View>
        </View>

        {/* Request a Quote Section */}
        <View style={styles.quoteSection}>
          <Text style={styles.quoteTitle}>Request a Free Quote</Text>
          <Text style={styles.quoteSubtitle}>
            We've found our mission: we build environment solutions that blend comfort and aesthetics.
          </Text>
          <View style={styles.reviewContainer}>
            <Image source={reviewImage} style={styles.reviewImage} />
            <View style={styles.reviewTextContainer}>
              <Text style={styles.reviewRating}>★★★★★</Text>
              <Text style={styles.reviewText}>
                "The team was professional and did an excellent job. I love my new windows!"
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.contactSalesButton}>
            <Text style={styles.contactSalesText}>Contact Sales</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerRow}>
            <View style={styles.footerColumn}>
              <Text style={styles.footerTitle}>Quick time</Text>
              <View style={styles.footerLinks}>
                <TouchableOpacity><Text style={styles.footerLink}>Appointment</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.footerLink}>Fastening</Text></TouchableOpacity>
              </View>
            </View>
            <View style={styles.footerColumn}>
              <Text style={styles.footerTitle}>Newsletter</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Enter your email</Text>
              </View>
            </View>
          </View>
          <View style={styles.footerLogos}>
            <Image source={logoImage} style={styles.footerLogo} />
            <Image source={logoImage} style={styles.footerLogo} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  logo: {
    width: 120,
    height: 30,
  },
  navContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  heroSection: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  shopNowButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginRight: 15,
  },
  getQuoteButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  getQuoteText: {
    color: 'white',
    fontWeight: '600',
  },
  benefitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
    marginHorizontal: 15,
    marginTop: -50,
    borderRadius: 10,
  },
  benefitCard: {
    alignItems: 'center',
    padding: 10,
    width: '30%',
  },
  benefitTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productCard: {
    width: cardWidth,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 8,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  productSubtitle: {
    fontSize: 11,
    color: '#888',
    textAlign: 'center',
    marginTop: 4,
  },
  productDescription: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 4,
    color: '#666',
  },
  productRating: {
    fontSize: 14,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 4,
  },
  quoteSection: {
    backgroundColor: '#0066cc',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  quoteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  quoteSubtitle: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 12,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewTextContainer: {
    flex: 1,
  },
  reviewRating: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 4,
  },
  reviewText: {
    color: '#333',
    fontSize: 12,
  },
  contactSalesButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  contactSalesText: {
    color: '#0066cc',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#2c3e50',
    padding: 20,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  footerColumn: {
    alignItems: 'center',
  },
  footerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  footerLinks: {
    flexDirection: 'row',
  },
  footerLink: {
    color: '#ccc',
    marginHorizontal: 5,
    fontSize: 12,
  },
  inputContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 5,
  },
  inputText: {
    color: '#888',
    fontSize: 12,
  },
  footerLogos: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  footerLogo: {
    width: 50,
    height: 50,
    marginLeft: 10,
    tintColor: '#95a5a6',
  },
});

export default Home;