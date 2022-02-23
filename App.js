import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import Home from "./components/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
