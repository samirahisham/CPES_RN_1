import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const ShoppingItem = ({ shoppingItem, navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center", marginVertical: 5 }}
          onPress={() =>
            navigation.navigate("Detail", { shoppingItem: shoppingItem })
          }
        >
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: shoppingItem.image_url }}
          />
          <View style={{ alignItems: "center" }}>
            <Text>name : {shoppingItem.name}</Text>
            <Text>price : {shoppingItem.price}</Text>
            <Text>stock : {shoppingItem.stock}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
          <MaterialIcons name="add-shopping-cart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingItem;
