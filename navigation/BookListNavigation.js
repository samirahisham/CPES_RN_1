import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../components/Cart";
import BookList from "../components/BookList";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "List") {
            return <Entypo name="open-book" size={24} color={color} />;
          } else if (route.name === "Cart") {
            return <EvilIcons name="cart" size={30} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="List" component={BookList} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
