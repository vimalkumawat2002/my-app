import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Seller1</Text>
        <View style={styles.headerIcons}>
          <View style={styles.cartIconContainer}>
            <FontAwesome name="shopping-cart" size={24} color="gray" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>3</Text>
            </View>
          </View>
          <FontAwesome name="search" size={24} color="gray" />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/3135715.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Seller-1</Text>
            <Text style={styles.profileQuote}>
              The harder you work, the luckier you will
            </Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>80°</Text>
            <Text style={styles.statLabel}>My Cart</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Coupons</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>8000</Text>
            <Text style={styles.statLabel}>Integral</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>$980</Text>
            <Text style={styles.statLabel}>Balance</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.whatsappButton}>
            <FontAwesome name="whatsapp" size={24} color="white" />
            <Text style={styles.buttonText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.callButton}>
            <FontAwesome name="phone" size={24} color="white" />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
        <View style={styles.orderContainer}>
          <Text style={styles.sectionTitle}>My Order</Text>
          <View style={styles.orderIconsContainer}>
            <View style={styles.orderIcon}>
              <FontAwesome5 name="file-alt" size={24} color="gray" />
              <Text style={styles.orderLabel}>Obligation</Text>
            </View>
            <View style={styles.orderIcon}>
              <FontAwesome5 name="box" size={24} color="gray" />
              <Text style={styles.orderLabel}>Delivery</Text>
            </View>
            <View style={styles.orderIcon}>
              <FontAwesome5 name="hourglass-half" size={24} color="gray" />
              <Text style={styles.orderLabel}>Wait</Text>
            </View>
            <View style={styles.orderIcon}>
              <FontAwesome5 name="star" size={24} color="gray" />
              <Text style={styles.orderLabel}>Evaluate</Text>
            </View>
            <View style={styles.orderIcon}>
              <FontAwesome5 name="undo" size={24} color="gray" />
              <Text style={styles.orderLabel}>Refund</Text>
            </View>
          </View>
        </View>
        <View style={styles.toolsContainer}>
          <Text style={styles.sectionTitle}>Tools and Services</Text>
        </View>
      </ScrollView>
      {/* <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <FontAwesome name="home" size={24} color="purple" />
          <Text style={styles.footerLabel}>Home</Text>
        </View>
        <View style={styles.footerIcon}>
          <FontAwesome name="th-large" size={24} color="gray" />
          <Text style={styles.footerLabel}>Product</Text>
        </View>
        <View style={styles.footerIcon}>
          <FontAwesome name="tag" size={24} color="gray" />
          <Text style={styles.footerLabel}>About</Text>
        </View>
        <View style={styles.footerIcon}>
          <FontAwesome name="user" size={24} color="gray" />
          <Text style={styles.footerLabel}>Contact</Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    marginVertical:20,
    backgroundColor: "#e6fffa",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#e3342f",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
    marginRight: 16,
  },
  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#e3342f",
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  cartBadgeText: {
    color: "white",
    fontSize: 10,
  },
  content: {
    padding: 16,
  },
  profileContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 4,
    borderColor: "#facc15",
    marginRight: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileQuote: {
    color: "#6b7280",
    marginHorizontal:-10,
   
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#6b7280",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  whatsappButton: {
    backgroundColor: "#25d366",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  callButton: {
    backgroundColor: "#007bff",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  buttonText: {
    color: "white",
    marginLeft: 8,
  },
  bookButton: {
    backgroundColor: "#facc15",
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 16,
    alignItems: "center",
  },
  bookButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  orderContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  orderIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  orderIcon: {
    alignItems: "center",
  },
  orderLabel: {
    color: "#6b7280",
  },
  toolsContainer: {
    marginTop: 16,
  },
  footer: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  footerIcon: {
    alignItems: "center",
  },
  footerLabel: {
    color: "#6b7280",
  },
});

export default App;
