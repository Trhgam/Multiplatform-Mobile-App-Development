import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Perfume } from "../data/perfumes";

export default function ProductCard({ item }: { item: Perfume }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.namePerfume}>{item.perfumeName}</Text>
      <Text style={styles.pricePerfume}>${item.price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    width: 180, // Giới hạn chiều rộng khung thẻ
    paddingHorizontal: 5,
    overflow: "hidden", // Cắt bỏ mọi thứ tràn ra ngoài khung
    // borderColor: "black",
    // borderWidth: 2,
    height: 300,
    // display: "flex", React native đã mặc định sẵn là display flex rồi
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 150,
  },
  namePerfume: {
    paddingTop: 7,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  pricePerfume: {
    fontWeight: "bold",
    color: "#A6393A",
    paddingBottom: 20,
    fontSize: 22,
  },
});
