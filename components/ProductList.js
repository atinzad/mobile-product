import { StyleSheet, Text, View } from "react-native";
import React from "react";
import productStore from "../stores/productStore";
import ProductItem from "./ProductItem";

const ProductList = ({ shop }) => {
  const products = shop.products.map((product) => (
    <ProductItem product={product} />
  ));
  return <View>{products}</View>;
};

export default ProductList;

const styles = StyleSheet.create({});
