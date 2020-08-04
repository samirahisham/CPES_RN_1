import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import List from "../components/List";
import PreviousOrders from "../components/PreviousOrders";
import ShoppingList from "../components/ShoppingList";
import TabNav from "./TabNav";

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Shopping" component={TabNav} />
      <Drawer.Screen name="Previous Orders" component={PreviousOrders} />
      <Drawer.Screen name="Shopping List" component={ShoppingList} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
