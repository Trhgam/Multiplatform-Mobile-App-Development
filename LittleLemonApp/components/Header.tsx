import { Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context"; // Không bao giờ bị deprecated

export default function Header() {
  return (
    <SafeAreaView style={styles.backgroundColor}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: "#000000",
    backgroundColor: "#EE9972",
    // paddingTop: 50, dùng SafeAreaView rồi nên ko cần paddingTop thêm vì nó đã làm sẵn cho rồi, nếu dùng View thì cần nhưng nó quá hardcode.
    // padding: 40,
    textAlign: "center",
    fontWeight: "500",
  },
  backgroundColor: {
    backgroundColor: "#EE9972",
  },
});
