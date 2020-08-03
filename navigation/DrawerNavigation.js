import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "../components/Settings";

import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
