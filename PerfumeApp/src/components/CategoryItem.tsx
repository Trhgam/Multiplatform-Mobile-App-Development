import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CategoryItemProps } from "../types/perfume";

export default function CategoryItem({
  name,
  count,
  isSelected,
}: CategoryItemProps) {
  return (
    <View
      style={[
        styles.container,
        isSelected ? styles.container : styles.containerPrimary,
      ]}
    >
      <Text
        style={[
          styles.text,
          isSelected ? styles.container : styles.containerPrimary,
        ]}
      >
        {name} ({count})
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal:8,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: "#5D8BF4",
  },
  containerPrimary: {
    color: "#000000",
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor:"#fefefe",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
