import React from "react";
import { styles } from "../public/styles/styles";
import { Text, View, Image, TextInput, Button } from "react-native";
import ReviewsList from "./ReviewsList";

const Detail = ({ route: params }) => {
  const shoppingItemProp = params.params.shoppingItem;

  return (
    <View style={styles.center}>
      <View>
        <Image
          style={styles.img}
          source={{ uri: shoppingItemProp.image_url }}
        />
        <Text> {shoppingItemProp.name}</Text>
        <Text> producer: producer </Text>
        <Text> stock: {shoppingItemProp.stock} </Text>
        <Text> cetegory: healthy,gift </Text>
      </View>
      <View style={{ margin: 10 }}>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <TextInput
            placeholder="enter quantity"
            keyboardType="numeric"
            style={{
              borderWidth: 1,
              marginHorizontal: 5,
              padding: 5,
              width: "50%",
            }}
          />
          <Button title="Add To Cart" />
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <ReviewsList />
      </View>
    </View>
  );
};

export default Detail;
