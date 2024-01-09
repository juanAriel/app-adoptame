import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../pages/register';
import Login from '../pages/login';
import Home1 from '../pages/home';
import Welcome from '../pages/welcome';

export type RouteParamList={
  Welcome:undefined;
    Register:undefined;
    Login:undefined;
    Home1:undefined;
}

const Stack = createNativeStackNavigator<RouteParamList>();
const rootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Welcome"
      component={Welcome}
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
      options={{ headerShown: false }}
    />
    </Stack.Navigator>
  )
}

export default rootNavigation