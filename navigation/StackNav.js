import React from "react";

import List from "../components/List";
import Detail from "../components/Detail";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shopping" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNav;
