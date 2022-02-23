import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
      <Text>-----------------</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
