import { SafeAreaView, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <SafeAreaView  style={styles.backgroundColor}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 36,
    color: "#000000",
    backgroundColor: "#F3D032",
    // paddingTop: 50, dùng SafeAreaView rồi nên ko cần paddingTop thêm vì nó đã làm sẵn cho rồi, nếu dùng View thì cần nhưng nó quá hardcode.
    paddingBottom: 5,
    textAlign: "center",
    fontWeight: "500",
  },
  backgroundColor: {
    backgroundColor: "#F3D032",
  },
});
