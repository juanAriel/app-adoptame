import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/welcome';
import Register from '../pages/register';

export type RouteParamList={
    Register:undefined;
}

const Stack = createNativeStackNavigator<RouteParamList>();
const rootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: "TAXI APP" }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: true }}
    />
    </Stack.Navigator>
  )
}

export default rootNavigation