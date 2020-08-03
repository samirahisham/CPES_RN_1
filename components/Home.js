import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("List")}
        title="go to Books List"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
