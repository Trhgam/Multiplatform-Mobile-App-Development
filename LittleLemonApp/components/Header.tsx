import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.backgroundColor}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 36,
    color: "#000000",
    backgroundColor: "#F3D032",
    paddingTop: 50,
    paddingBottom: 5,
    textAlign: "center",
    fontWeight: "500",
  },
  backgroundColor: {
    backgroundColor: "#F3D032",
  },
});
