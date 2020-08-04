import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import ToShopList from "./ToShopList";

const ShoppingList = () => {
  return (
    <SafeAreaView style={styles.listWrapper}>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Text>Shopping List</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ flex: 1, padding: 40 }}>
        <ToShopList listOItems={["item1", "item2", "item2"]} />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingList;

export const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    marginTop: Platform.OS == "android" ? 30 : 0,
  },

  input: {
    borderColor: "grey",
    borderWidth: 1,
    width: "60%",
    marginBottom: 10,
    marginTop: 5,
  },
});
