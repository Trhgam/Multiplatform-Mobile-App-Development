import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headrText} >Welcome to Little Lemon</Text>
      <Text style={styles.titleSmall}>
        {" "}
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!{" "}
      </Text>
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
    paddingBottom: 250,
    backgroundColor: "#124444",
  },
});
