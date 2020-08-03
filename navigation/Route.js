import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import TabNavigation from "./BookListNavigation";

const Route = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Route;
