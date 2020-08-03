import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import TabNavigation from "./BookListNavigation";
import DrawerNavigation from "./DrawerNavigation";

const Route = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Route;
