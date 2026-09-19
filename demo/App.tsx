import { View, StyleSheet } from "react-native";
import Welcome from "./components/Welcome";
import HeaderCon from "./components/HeaderCon";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderCon />
      <Welcome />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E524B",
  },
});

