import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headrText}>Welcome to Little Lemon</Text>
        <Text style={styles.titleSmall}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  headrText: {
    fontSize: 40,
    color: "#f0f0f0",
    textAlign: "center",
    paddingBottom: 80,
  },
  titleSmall: {
    fontSize: 22,
    color: "#f0f0f0",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#495E57",
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    paddingTop: 50,
  },
});
