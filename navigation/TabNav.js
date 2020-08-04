import React from "react";

import { Fontisto } from "@expo/vector-icons";
import Cart from "../components/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNav from "./StackNav";
import { EvilIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "Shopping") {
            return <Fontisto name="shopping-store" size={24} color={color} />;
          } else if (route.name === "Cart") {
            return <EvilIcons name="cart" size={35} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Shopping" component={StackNav} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default TabNav;
