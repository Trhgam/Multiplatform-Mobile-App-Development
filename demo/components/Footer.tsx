import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 19,
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
  },
});
