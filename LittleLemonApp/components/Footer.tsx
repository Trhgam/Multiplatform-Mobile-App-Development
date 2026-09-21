import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#EE9972",
    marginBottom: 20,
    // paddingVertical: 10,
  },
  title: {
    color: "#000000",
    textAlign: "center",
    fontSize: 18,
    // fontWeight: "500",
    fontStyle: "italic",

  },
});
