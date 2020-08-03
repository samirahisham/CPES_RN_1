import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Test = () => {
  return (
    <View style={styles.center}>
      <Text>Test</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
