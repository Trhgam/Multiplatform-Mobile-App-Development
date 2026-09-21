import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoriesList() {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal // Giúp cuộn ngang
        showsHorizontalScrollIndicator={false} //  Ẩn thanh cuộn ngang
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //  Truyền đúng 2 biến name và count vào CategoryItem
          <CategoryItem
            name={item.name}
            count={item.count}
            isSelected={item.isSelected}
          />
        )}
      />
    </View>
  );
}
export const CATEGORIES = [
  { id: "1", name: "ALL", count: 9, isSelected: true },
  { id: "2", name: "BVLGARI", count: 2, isSelected: false },
  { id: "3", name: "GUCCI", count: 2, isSelected: false },
  { id: "4", name: "MONTBLANC", count: 2, isSelected: false },
  { id: "5", name: "DIOR", count: 3, isSelected: false },
];
const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
