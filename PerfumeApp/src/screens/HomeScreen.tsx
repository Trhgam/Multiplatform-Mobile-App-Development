import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import CategoriesList from "../components/CategoriesList";
import ProductList from "../components/ProductList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <CategoriesList />
      <ProductList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1F2",
  },
});
