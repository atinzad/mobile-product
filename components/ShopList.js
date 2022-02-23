import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react-lite";

const ShopList = () => {
  const shops = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} />
  ));

  console.log("Shops", shopStore.shops);

  return <View style={styles.list}>{shops}</View>;
};

export default observer(ShopList);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
  },
});
