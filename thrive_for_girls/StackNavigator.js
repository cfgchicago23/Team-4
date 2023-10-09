import { View, Text, BackHandler } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import TabNavigator from "./TabNavigator";
import AdminTabNav from "./AdminTabNav";

import PostDetails from "./src/screens/PostDetails";
import CreatePost from "./src/screens/CreatePost";
import LessonDetails from "./src/screens/LessonDetails";
import PostComments from "./src/screens/PostComments";
import Register from "./src/screens/Register";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LoginTemp' component={Login}/>
        <Stack.Screen name='Register' component ={Register}/>
        <Stack.Screen name='HomeScreen' component={TabNavigator}/>
        <Stack.Screen name='AdimHomeScreen' component={AdminTabNav}/>
        <Stack.Screen name='PostDetails' component={PostDetails}/>
        <Stack.Screen name='CreatePost' component={CreatePost}/>
        <Stack.Screen name='LessonDetails' component={LessonDetails}/>
        <Stack.Screen name='PostComments' component={PostComments}/>
    </Stack.Navigator>
  );
}
