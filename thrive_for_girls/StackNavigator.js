import { View, Text, BackHandler } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LoginTemp' component={Login}/>
        <Stack.Screen name='HomeScreen' component={TabNavigator}/>
    </Stack.Navigator>
  );
}
