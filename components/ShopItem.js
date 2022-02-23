import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { baseURL } from "../stores/instance";
import ShopDetail from "./ShopDetail";

const ShopItem = ({ shop }) => {
  return (
    <View style={styles.box}>
      <Text>{shop.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: baseURL + shop.image,
        }}
      />
      <ShopDetail shop={shop} />
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: "90%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    margin: 30,
  },
  image: {
    height: 100,
    width: 100,
  },
});
