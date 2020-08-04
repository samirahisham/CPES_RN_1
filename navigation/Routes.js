import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";

const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default Routes;
