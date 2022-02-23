import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { baseURL } from "../stores/instance";
import ProductList from "./ProductList";
import { Image } from "react-native";

const ShopDetail = ({ shop }) => {
  return (
    <View>
      {/* <Text>{shop.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: baseURL + shop.image,
        }}
      /> */}
      <ProductList shop={shop} />
    </View>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});
