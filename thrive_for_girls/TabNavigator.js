import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Lessons from './src/screens/Lessons';
import Forum from './src/screens/Forum';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iName;

                if (route.name === "Home") {
                    iName = focused ? 'home' : 'home-outline';
                } else if (route.name === "Profile") {
                    iName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                } else if (route.name === "Lessons") {
                    iName = focused ? 'library-sharp' : 'library-outline';
                }
                

                else if (route.name === "Forum"){
                    iName = focused ? 'chatbubble-ellipses-sharp' : 'chatbubble-ellipses-outline';
                }

                return <Ionicons name={iName} size={size} color={color}/>;
            },

            tabBarStyle: {
                borderTopWidth: 1,
                borderTopColor: "white",
            },
            tabBarActiveTintColor: '#ff829b',
            tabBarInactiveTintColor: 'gray',

        })}>
            <Tab.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Tab.Screen name='Lessons' component={Lessons} options={{headerShown: false}}/>
            <Tab.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
            <Tab.Screen name='Forum' component={Forum} options = {{headerShown: false}}/>
        </Tab.Navigator>
    )
}
