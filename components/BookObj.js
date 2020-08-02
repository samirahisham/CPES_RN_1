import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BookObj = ({ book }) => {
  return (
    <View>
      {console.log(book)}
      <Text style={{ backgroundColor: book.cover_color }}>{book.title}</Text>
      <Image style={styles.imgSize} source={{ uri: book.cover_url }} />
      <Text style={styles.bigText}>{book.author}</Text>
      <Text>{book.pages}</Text>
    </View>
  );
};

export default BookObj;
const styles = StyleSheet.create({
  imgSize: {
    width: 150,
    height: 200,
  },
  flatStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boldText: {
    fontWeight: "bold",
  },
  bigText: {
    color: "forestgreen",
  },
});
