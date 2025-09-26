import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

// Placeholder for your images - replace with your actual image paths
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
                <Text style={styles.buttonText}>Get a Quote</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* Key Benefits */}
        <View style={styles.benefitsContainer}>
          <View style={styles.benefitItem}>
            <FontAwesome5 name="shield-alt" size={30} color="#0066cc" />
            <Text style={styles.benefitText}>Durability</Text>
          </View>
          <View style={styles.benefitItem}>
            <Ionicons name="leaf-outline" size={30} color="#0066cc" />
            <Text style={styles.benefitText}>Energy Efficiency</Text>
          </View>
          <View style={styles.benefitItem}>
            <FontAwesome5 name="ruler-combined" size={30} color="#0066cc" />
            <Text style={styles.benefitText}>Custom Designs</Text>
          </View>
        </View>

        {/* Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Benefits</Text>
          <View style={styles.productRow}>
            <View style={styles.productItem}>
              <Image source={product1} style={styles.productImage} />
              <Text style={styles.productTitle}>Sliding Doors</Text>
              <Text style={styles.productSubtitle}>About Us</Text>
              <Text style={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod...
              </Text>
            </View>
            <View style={styles.productItem}>
              <Image source={product2} style={styles.productImage} />
              <Text style={styles.productTitle}>Casement Windows</Text>
              <Text style={styles.productSubtitle}>Featured Reviews</Text>
              <Text style={styles.productRating}>★★★★★</Text>
            </View>
            <View style={styles.productItem}>
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
            <Text style={styles.reviewText}>
              "★★★★★ Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </Text>
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
                <Text style={styles.footerLink}>Appointment</Text>
                <Text style={styles.footerLink}>Fastening</Text>
              </View>
            </View>
            <View style={styles.footerColumn}>
              <Text style={styles.footerTitle}>Newsletter</Text>
              <Text style={styles.footerSubtitle}>Enter your email</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Email</Text>
              </View>
            </View>
          </View>
          <View style={styles.footerLogos}>
            <Image source={require('./assets/logo_small.png')} style={styles.footerLogo} />
            <Image source={require('./assets/logo_small.png')} style={styles.footerLogo} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 120,
    height: 30,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
  },
  heroSection: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shopNowButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  getQuoteButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  benefitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  benefitItem: {
    alignItems: 'center',
  },
  benefitText: {
    marginTop: 5,
    fontWeight: '500',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '30%',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  productTitle: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  productSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  productDescription: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  productRating: {
    fontSize: 14,
    color: '#FFD700',
  },
  quoteSection: {
    backgroundColor: '#0066cc',
    padding: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  quoteTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  quoteSubtitle: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  reviewImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewText: {
    color: 'white',
    fontStyle: 'italic',
    flex: 1,
  },
  contactSalesButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 20,
  },
  contactSalesText: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#333',
    padding: 20,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  },
  footerSubtitle: {
    color: '#ccc',
    fontSize: 12,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
  },
  inputText: {
    color: '#888',
  },
  footerLogos: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  footerLogo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});

export default Home;