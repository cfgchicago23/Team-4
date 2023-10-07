import { View, Text, BackHandler } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginTemp from "./src/screens/LoginTemp";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator >
        <Stack.Screen name='LoginTemp' component={LoginTemp}/>
        <Stack.Screen name='HomeScreen' component={TabNavigator}/>
    </Stack.Navigator>
  );
}
