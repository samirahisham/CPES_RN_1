import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import ShoppingItem from "./ShoppingItem";
const ShoppingItems = [
  {
    id: 1,
    name: "food",
    price: "12",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "15",
  },
  {
    id: 2,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
  {
    id: 3,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
  {
    id: 4,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
  {
    id: 5,
    name: "drink",
    price: "20",
    image_url:
      "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
    stock: "40",
  },
];
const ItemsListComponent = ({ navigation }) => {
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <FlatList
        data={ShoppingItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ShoppingItem shoppingItem={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default ItemsListComponent;
