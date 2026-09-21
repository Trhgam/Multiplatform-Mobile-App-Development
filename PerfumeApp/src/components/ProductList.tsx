import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { PERFUMES_DATA } from "../data/perfumes";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <FlatList
      data={PERFUMES_DATA}
      numColumns={2} // CHIA 2 CỘT Ở ĐÂY
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard item={item} />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  list: {
    padding: 6,
  },
});
