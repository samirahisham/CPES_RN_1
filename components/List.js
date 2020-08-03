import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = () => {
  return (
    <View style={styles.center}>
      <Text>New List</Text>
    </View>
  );
};

export default List;
const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
