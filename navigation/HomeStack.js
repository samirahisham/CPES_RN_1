import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../components/Detail";
import Home from "../components/Home";
import BookListNavigation from "./BookListNavigation";
import List from "../components/List";
import Test from "../components/Test";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerRight: () => (
            <Button title="test" onPress={() => navigation.navigate("Test")} />
          ),
        })}
        name="List"
        component={BookListNavigation}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
