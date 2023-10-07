// AppNavigator.js

import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Forum from './Forum'; // Import the Forum component
import PostDetails from './PostDetails'; // Import the PostDetails component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Forum">
      <Stack.Screen name="Forum" component={Forum} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
};

export default createAppContainer(AppNavigator);
