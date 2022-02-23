import { observer } from "mobx-react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Alert, Pressable } from "react-native";
import ShopList from "./ShopList";
import { VStack } from "native-base";

const Home = () => {
  return (
    <>
      <View style={styles.containerButton}>
        <Text style={styles.text}>Home</Text>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text>Press Me</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <ShopList />
      </View>
    </>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  containerButton: {
    textAlign: "center",
    margin: 100,
    width: "100%",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "gray",
  },
  container: {
    width: "100%",
    flex: 7,
  },
});
