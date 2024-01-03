import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/welcome';
import Register from '../pages/register';
import Login from '../pages/login';
import Home1 from '../pages/home';

export type RouteParamList={
    Home:undefined;
    Register:undefined;
    Login:undefined;
    Home1:undefined;
}

const Stack = createNativeStackNavigator<RouteParamList>();
const rootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: "BIENVENIDO A ADOPTA" }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: true }}
    />
     <Stack.Screen
      name="Home1"
      component={Home1}
      options={{ headerShown: true }}
    />
    </Stack.Navigator>
  )
}

export default rootNavigation