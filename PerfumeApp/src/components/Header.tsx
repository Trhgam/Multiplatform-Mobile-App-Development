import { Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Text style={styles.headerTitle}>Home Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    color: "#fefefe",
    backgroundColor: "#78A2F3",
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  safeArea: {
    backgroundColor: "#78A2F3",
  },
});
