// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
// import { Platform } from 'react-native-web';

// const { width } = Dimensions.get('window');
// const cardWidth = (width - 60) / 3;

// // Using online URLs for images
// const heroImage = { uri: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' };
// const logoImage = { uri: 'https://i.imgur.com/KqB5D8L.png' }; // Placeholder logo
// const product1 = { uri: 'https://images.unsplash.com/photo-1616422899478-f7b5d140b0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' };
// const product2 = { uri: 'https://images.unsplash.com/photo-1582234033100-2f3b7d1b3e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' };
// const product3 = { uri: 'https://images.unsplash.com/photo-1627447471862-2f0c76d29c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' };
// const reviewImage = { uri: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' };

// const Home = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Image source={logoImage} style={styles.logo} resizeMode="contain" />
//           <View style={styles.navContainer}>
//             <Text style={styles.navText}>Home</Text>
//             <Text style={styles.navText}>Products</Text>
//             <Text style={styles.navText}>Services</Text>
//             <Text style={styles.navText}>About Us</Text>
//             <Text style={styles.navText}>Contact</Text>
//           </View>
//         </View>

//         {/* Hero Section */}
//         <ImageBackground source={heroImage} style={styles.heroSection}>
//           <View style={styles.overlay}>
//             <Text style={styles.heroTitle}>Premium Windows & Doors for Every Home</Text>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={styles.shopNowButton}>
//                 <Text style={styles.buttonText}>Shop Now</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.getQuoteButton}>
//                 <Text style={styles.getQuoteText}>Get a Quote</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ImageBackground>

//         {/* Key Benefits */}
//         <View style={styles.benefitsContainer}>
//           <View style={styles.benefitCard}>
//             <FontAwesome5 name="shield-alt" size={24} color="#0066cc" />
//             <Text style={styles.benefitTitle}>Durability</Text>
//           </View>
//           <View style={styles.benefitCard}>
//             <Ionicons name="leaf-outline" size={24} color="#0066cc" />
//             <Text style={styles.benefitTitle}>Energy Efficiency</Text>
//           </View>
//           <View style={styles.benefitCard}>
//             <FontAwesome5 name="ruler-combined" size={24} color="#0066cc" />
//             <Text style={styles.benefitTitle}>Custom Designs</Text>
//           </View>
//         </View>

//         {/* Products Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionHeader}>Key Benefits</Text>
//           <View style={styles.productRow}>
//             <View style={styles.productCard}>
//               <Image source={product1} style={styles.productImage} />
//               <Text style={styles.productTitle}>Sliding Doors</Text>
//               <Text style={styles.productSubtitle}>About Us</Text>
//               <Text style={styles.productDescription}>
//                 A broad range of expertise, vast craft and professional caliber.
//               </Text>
//             </View>
//             <View style={styles.productCard}>
//               <Image source={product2} style={styles.productImage} />
//               <Text style={styles.productTitle}>Casement Windows</Text>
//               <Text style={styles.productSubtitle}>Featured Reviews</Text>
//               <Text style={styles.productRating}>★★★★★</Text>
//             </View>
//             <View style={styles.productCard}>
//               <Image source={product3} style={styles.productImage} />
//               <Text style={styles.productTitle}>French Doors</Text>
//               <Text style={styles.productSubtitle}>Client Reviews</Text>
//               <Text style={styles.productRating}>★★★★★</Text>
//             </View>
//           </View>
//         </View>

//         {/* Request a Quote Section */}
//         <View style={styles.quoteSection}>
//           <Text style={styles.quoteTitle}>Request a Free Quote</Text>
//           <Text style={styles.quoteSubtitle}>
//             We've found our mission: we build environment solutions that blend comfort and aesthetics.
//           </Text>
//           <View style={styles.reviewContainer}>
//             <Image source={reviewImage} style={styles.reviewImage} />
//             <View style={styles.reviewTextContainer}>
//               <Text style={styles.reviewRating}>★★★★★</Text>
//               <Text style={styles.reviewText}>
//                 "The team was professional and did an excellent job. I love my new windows!"
//               </Text>
//             </View>
//           </View>
//           <TouchableOpacity style={styles.contactSalesButton}>
//             <Text style={styles.contactSalesText}>Contact Sales</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Footer */}
//         <View style={styles.footer}>
//           <View style={styles.footerRow}>
//             <View style={styles.footerColumn}>
//               <Text style={styles.footerTitle}>Quick time</Text>
//               <View style={styles.footerLinks}>
//                 <TouchableOpacity><Text style={styles.footerLink}>Appointment</Text></TouchableOpacity>
//                 <TouchableOpacity><Text style={styles.footerLink}>Fastening</Text></TouchableOpacity>
//               </View>
//             </View>
//             <View style={styles.footerColumn}>
//               <Text style={styles.footerTitle}>Newsletter</Text>
//               <View style={styles.inputContainer}>
//                 <Text style={styles.inputText}>Enter your email</Text>
//               </View>
//             </View>
//           </View>
//           <View style={styles.footerLogos}>
//             <Image source={logoImage} style={styles.footerLogo} />
//             <Image source={logoImage} style={styles.footerLogo} />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: 'white',
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//       },
//       android: {
//         elevation: 3,
//       },
//     }),
//   },
//   logo: {
//     width: 120,
//     height: 30,
//   },
//   navContainer: {
//     flexDirection: 'row',
//     width: '60%',
//     justifyContent: 'space-between',
//   },
//   navText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#333',
//   },
//   heroSection: {
//     width: '100%',
//     height: 350,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   heroTitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 15,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//   },
//   shopNowButton: {
//     backgroundColor: '#0066cc',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 5,
//     marginRight: 15,
//   },
//   getQuoteButton: {
//     backgroundColor: 'transparent',
//     borderColor: 'white',
//     borderWidth: 1,
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   getQuoteText: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   benefitsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 20,
//     backgroundColor: 'white',
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 5,
//       },
//     }),
//     marginHorizontal: 15,
//     marginTop: -50,
//     borderRadius: 10,
//   },
//   benefitCard: {
//     alignItems: 'center',
//     padding: 10,
//     width: '30%',
//   },
//   benefitTitle: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   section: {
//     padding: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#333',
//   },
//   productRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   productCard: {
//     width: cardWidth,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 10,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.1,
//         shadowRadius: 2,
//       },
//       android: {
//         elevation: 2,
//       },
//     }),
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 5,
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontWeight: 'bold',
//     fontSize: 14,
//     color: '#333',
//     textAlign: 'center',
//   },
//   productSubtitle: {
//     fontSize: 11,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 4,
//   },
//   productDescription: {
//     fontSize: 10,
//     textAlign: 'center',
//     marginTop: 4,
//     color: '#666',
//   },
//   productRating: {
//     fontSize: 14,
//     color: '#FFD700',
//     textAlign: 'center',
//     marginTop: 4,
//   },
//   quoteSection: {
//     backgroundColor: '#0066cc',
//     padding: 20,
//     borderRadius: 10,
//     margin: 20,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.2,
//         shadowRadius: 6,
//       },
//       android: {
//         elevation: 8,
//       },
//     }),
//   },
//   quoteTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   quoteSubtitle: {
//     color: 'white',
//     textAlign: 'center',
//     marginVertical: 10,
//     fontSize: 12,
//   },
//   reviewContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 15,
//     marginBottom: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//       },
//       android: {
//         elevation: 3,
//       },
//     }),
//   },
//   reviewImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   reviewTextContainer: {
//     flex: 1,
//   },
//   reviewRating: {
//     color: '#FFD700',
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   reviewText: {
//     color: '#333',
//     fontSize: 12,
//   },
//   contactSalesButton: {
//     backgroundColor: 'white',
//     paddingVertical: 15,
//     borderRadius: 8,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
//   contactSalesText: {
//     color: '#0066cc',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   footer: {
//     backgroundColor: '#2c3e50',
//     padding: 20,
//   },
//   footerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   footerColumn: {
//     alignItems: 'center',
//   },
//   footerTitle: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   footerLinks: {
//     flexDirection: 'row',
//   },
//   footerLink: {
//     color: '#ccc',
//     marginHorizontal: 5,
//     fontSize: 12,
//   },
//   inputContainer: {
//     backgroundColor: 'white',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 5,
//     marginTop: 5,
//   },
//   inputText: {
//     color: '#888',
//     fontSize: 12,
//   },
//   footerLogos: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginTop: 10,
//   },
//   footerLogo: {
//     width: 50,
//     height: 50,
//     marginLeft: 10,
//     tintColor: '#95a5a6',
//   },
// });

// export default Home;


import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// --- Color Palette ---
const Colors = {
  primaryBlue: '#0066CC',
  darkBlue: '#0F2030', // A darker blue for footer
  lightBlue: '#E6F0F8', // A very light blue/gray
  mediumGray: '#666666',
  lightGray: '#F5F5F5', // Background for benefits section
  white: '#FFFFFF',
  black: '#333333',
  borderColor: '#E0E0E0',
  starYellow: '#FFD700',
};

// --- New, Working Online Image URLs ---
const heroImage = { uri: 'https://images.unsplash.com/photo-1582234033100-2f3b7d1b3e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' };
const logoImage = { uri: 'https://i.imgur.com/yU4l2sH.png' }; // New placeholder logo
const slidingDoorImage = { uri: 'https://images.unsplash.com/photo-1627447471862-2f0c76d29c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' };
const casementWindowImage = { uri: 'https://images.unsplash.com/photo-1549416568-19e0750bb862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' };
const frenchDoorImage = { uri: 'https://images.unsplash.com/photo-1596765103004-79350438b488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' };
const reviewProfileImage = { uri: 'https://randomuser.me/api/portraits/men/44.jpg' };
const certLogo1 = { uri: 'https://via.placeholder.com/50x50/DDDDDD/000000?text=Cert1' };
const certLogo2 = { uri: 'https://via.placeholder.com/50x50/DDDDDD/000000?text=Cert2' };


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
            <View style={styles.heroContent}>
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
          </View>
        </ImageBackground>

        {/* Key Benefits Cards */}
        <View style={styles.benefitsSection}>
          <View style={styles.benefitCard}>
            <FontAwesome5 name="shield-alt" size={24} color={Colors.primaryBlue} />
            <Text style={styles.benefitCardText}>Durability</Text>
          </View>
          <View style={styles.benefitCard}>
            <Ionicons name="leaf-outline" size={24} color={Colors.primaryBlue} />
            <Text style={styles.benefitCardText}>Energy Efficiency</Text>
          </View>
          <View style={styles.benefitCard}>
            <FontAwesome5 name="ruler-combined" size={24} color={Colors.primaryBlue} />
            <Text style={styles.benefitCardText}>Custom Designs</Text>
          </View>
        </View>

        {/* Product Grid Section */}
        <View style={styles.productsSection}>
          <Text style={styles.sectionHeaderTitle}>Key Benefits</Text>
          <View style={styles.productGrid}>
            {/* Sliding Doors Card */}
            <View style={styles.productItemCard}>
              <Image source={slidingDoorImage} style={styles.productImage} />
              <Text style={styles.productItemTitle}>Sliding Doors</Text>
              <Text style={styles.productItemSubtitle}>About Us</Text>
              <Text style={styles.productItemDescription}>A broad range of expertise, vast craft and professional caliber. Find More</Text>
              <TouchableOpacity>
                <Text style={styles.findMoreLink}>Find More</Text>
              </TouchableOpacity>
            </View>

            {/* Casement Windows Card */}
            <View style={styles.productItemCard}>
              <Image source={casementWindowImage} style={styles.productImage} />
              <Text style={styles.productItemTitle}>Casement Windows</Text>
              <Text style={styles.productItemSubtitle}>Featurn Reviews</Text>
              <View style={styles.starRating}>
                <AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="staro" size={14} color={Colors.starYellow} />
              </View>
            </View>

            {/* French Doors Card */}
            <View style={styles.productItemCard}>
              <Image source={frenchDoorImage} style={styles.productImage} />
              <Text style={styles.productItemTitle}>French Doors</Text>
              <Text style={styles.productItemSubtitle}>Client Reviews</Text>
              <View style={styles.starRating}>
                <AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} />
              </View>
            </View>
          </View>
        </View>

        {/* Request a Quote Section */}
        <View style={styles.quoteSection}>
          <Text style={styles.quoteTitle}>Request a Free Quote</Text>
          <Text style={styles.quoteDescription}>We've found our mission: we build environment solutions that blend comfort and aesthetics.</Text>
          <View style={styles.clientReviewBox}>
            <Image source={reviewProfileImage} style={styles.reviewProfileImage} />
            <View style={styles.reviewContent}>
              <View style={styles.starRating}>
                <AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} /><AntDesign name="star" size={14} color={Colors.starYellow} />
              </View>
              <Text style={styles.reviewerText}>"The team was professional and did an excellent job!" - Jane Doe</Text>
            </View>
            <TouchableOpacity style={styles.contactSalesButton}>
              <Text style={styles.contactSalesText}>Contact Sales</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.footerColumn}>
              <Text style={styles.footerTitle}>Quick time</Text>
              <View style={styles.footerLinksRow}>
                <TouchableOpacity><Text style={styles.footerLink}>Appointment</Text></TouchableOpacity>
                <TouchableOpacity style={styles.footerLinkDivider}><Text style={styles.footerLink}>Fastening</Text></TouchableOpacity>
              </View>
            </View>
            <View style={styles.footerColumn}>
              <Text style={styles.footerTitle}>Newsletter</Text>
              <View style={styles.newsletterInputContainer}>
                <Text style={styles.newsletterInputText}>Enter your email</Text>
              </View>
            </View>
            <View style={styles.footerCertLogos}>
              <Image source={certLogo1} style={styles.certLogo} resizeMode="contain" />
              <Image source={certLogo2} style={styles.certLogo} resizeMode="contain" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  logo: {
    width: 140,
    height: 30,
  },
  navContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  navText: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.mediumGray,
  },
  heroSection: {
    width: '100%',
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  heroContent: {
    paddingHorizontal: 20,
    width: '70%',
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  shopNowButton: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  getQuoteButton: {
    backgroundColor: 'transparent',
    borderColor: Colors.white,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  getQuoteText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  benefitsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: -50,
    paddingVertical: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  benefitCard: {
    alignItems: 'center',
    padding: 10,
    width: '30%',
  },
  benefitCardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
  },
  productsSection: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: Colors.lightGray,
  },
  sectionHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 20,
  },
  productGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productItemCard: {
    width: (width - 60) / 3,
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  productImage: {
    width: '100%',
    height: 90,
    borderRadius: 4,
    marginBottom: 10,
  },
  productItemTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 5,
  },
  productItemSubtitle: {
    fontSize: 11,
    color: Colors.mediumGray,
    textAlign: 'center',
    marginBottom: 5,
  },
  productItemDescription: {
    fontSize: 10,
    color: Colors.mediumGray,
    textAlign: 'left',
    marginBottom: 8,
    lineHeight: 14,
  },
  findMoreLink: {
    fontSize: 10,
    color: Colors.primaryBlue,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  starRating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  quoteSection: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  quoteDescription: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 20,
    lineHeight: 18,
  },
  clientReviewBox: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  reviewProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  reviewContent: {
    flex: 1,
    marginRight: 10,
  },
  reviewerText: {
    fontSize: 12,
    color: Colors.black,
    lineHeight: 18,
  },
  contactSalesButton: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  contactSalesText: {
    color: Colors.primaryBlue,
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    backgroundColor: Colors.darkBlue,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footerColumn: {
    flex: 1,
    marginRight: 10,
  },
  footerTitle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 15,
  },
  footerLinksRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerLink: {
    color: Colors.borderColor,
    fontSize: 12,
  },
  footerLinkDivider: {
    marginLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: Colors.mediumGray,
    paddingLeft: 10,
  },
  newsletterInputContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
  },
  newsletterInputText: {
    color: Colors.mediumGray,
    fontSize: 12,
  },
  footerCertLogos: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  certLogo: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 5,
  },
});

export default Home;