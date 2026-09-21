import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <WelcomeScreen />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    justifyContent: "space-between",
  },
});
