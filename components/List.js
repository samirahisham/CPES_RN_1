import React from "react";
import { Text, View } from "react-native";
import { styles } from "../public/styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import ItemsListComponent from "./ItemsListComponent";

const List = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <ItemsListComponent navigation={navigation} />
    </View>
  );
};

export default List;
