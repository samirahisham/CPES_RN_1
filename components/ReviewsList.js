import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReviewsList = () => {
  return (
    <View>
      <Text>Reviews :</Text>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          justifyContent: "space-between",
        }}
      >
        <View style={{ borderRightWidth: 1, marginRight: 2 }}>
          <Text> User </Text>
        </View>

        <Text style={{ marginLeft: 2 }}>Good Review!</Text>
      </View>
    </View>
  );
};

export default ReviewsList;

const styles = StyleSheet.create({});
