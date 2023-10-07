import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function LoginTemp() {
    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text>
            Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}