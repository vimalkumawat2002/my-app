import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/3135715.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>VIMAL KUMAWAT</Text>
        <Text style={styles.jobTitle}>Web Developer</Text>
        <Text style={styles.location}>JAIPUR</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialLinks}>
          <View style={styles.socialLink}>
            <FontAwesome name="twitter" size={24} color="black" />
            <Text style={styles.socialText}>Twitter</Text>
          </View>
          <View style={styles.socialLink}>
            <FontAwesome name="github" size={24} color="black" />
            <Text style={styles.socialText}>Github</Text>
          </View>
          <View style={styles.socialLink}>
            <FontAwesome name="instagram" size={24} color="black" />
            <Text style={styles.socialText}>Instagram</Text>
          </View>
          <View style={styles.socialLink}>
            <FontAwesome name="facebook" size={24} color="black" />
            <Text style={styles.socialText}>Facebook</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>User Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Full Name</Text>
          <Text style={styles.infoValue}>VIMAL</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>VK@example.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoValue}>(123) 456-7890</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Mobile</Text>
          <Text style={styles.infoValue}>(098) 765-4321</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address</Text>
          <Text style={styles.infoValue}>JAIPUR</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.sectionTitle}>Project Status</Text>
        {renderStatus("Web Design", "80%")}
        {renderStatus("Website Markup", "72%")}
        {renderStatus("One Page", "89%")}
        {renderStatus("Mobile Template", "55%")}
        {renderStatus("Backend API", "66%")}
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.sectionTitle}>Project Status</Text>
        {renderStatus("Web Design", "80%")}
        {renderStatus("Website Markup", "72%")}
        {renderStatus("One Page", "89%")}
        {renderStatus("Mobile Template", "55%")}
        {renderStatus("Backend API", "66%")}
      </View>
    </ScrollView>
  );
}

const renderStatus = (title, percentage) => (
  <View style={styles.statusRow}>
    <Text style={styles.statusLabel}>{title}</Text>
    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: percentage }]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 16,
  },
  profileContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  jobTitle: {
    color: "#6b7280",
  },
  location: {
    color: "#6b7280",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  followButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginRight: 8,
  },
  messageButton: {
    backgroundColor: "#d1d5db",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
  },
  socialLinks: {
    marginTop: 16,
    width: "100%",
  },
  socialLink: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  socialText: {
    marginLeft: 8,
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  infoLabel: {
    color: "#6b7280",
  },
  infoValue: {
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#14b8a6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: "flex-end",
    marginTop: 8,
  },
  statusContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  statusRow: {
    marginBottom: 8,
  },
  statusLabel: {
    color: "#6b7280",
    marginBottom: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#d1d5db",
    borderRadius: 4,
  },
  progress: {
    height: 8,
    backgroundColor: "#3b82f6",
    borderRadius: 4,
  },
});
