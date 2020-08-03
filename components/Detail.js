import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Detail = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.center}>
      <Text>Detail</Text>
      <Button title="Go Back" onPress={pressHandler} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
