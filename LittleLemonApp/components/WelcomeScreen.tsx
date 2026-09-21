import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.subheadingText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would
        love to hear more about your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 32,
    color: "#EDEFEE",
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "bold",
  },
  subheadingText: {
    fontSize: 20,
    color: "#EDEFEE",
    textAlign: "center",
    lineHeight: 28,
  },
});
