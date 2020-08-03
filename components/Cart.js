import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cart = () => {
  return (
    <View style={styles.center}>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
