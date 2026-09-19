import { View, Text, StyleSheet } from "react-native";

export default function HeaderCon() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    paddingTop: 45,
    paddingBottom: 15,
  },
  headerText: {
    fontSize: 35,
    color: "#000000",
    textAlign: "center",
  },
});
