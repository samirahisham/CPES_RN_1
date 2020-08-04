import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { styles } from "../public/styles/styles";

const ToShopList = ({ listOItems }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ width: "100%" }}
        data={listOItems}
        renderItem={({ item }) => <Text style={{}}>{item}</Text>}
      />
    </View>
  );
};

export default ToShopList;
