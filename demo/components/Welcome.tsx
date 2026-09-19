import { View, Text, StyleSheet } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.subtitle}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    color: "#EDEFEE",
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 23,
    color: "#EDEFEE",
    textAlign: "center",
    lineHeight: 26,
  },
});
