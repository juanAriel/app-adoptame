import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../pages/register";
import Login from "../pages/login";
import Welcome from "../pages/welcome";
import BottomTabNavigation from "./BottomTabNavigation";
import ListaMascota from "../pages/listaMascotas";
import Mascota from "../pages/registerMascota";
import DetallesMascota from "../pages/detallesMascota";


export type RouteParamList = {
  Welcome: any;
  Register: any;
  Login: any;
  Home: any;
  ListaMascota: any;
  Mascota: any;
  DetallesMascota: any;
};

const Stack = createNativeStackNavigator<RouteParamList>();
const RootNavigation = () => {
  return (
  
   
     <Stack.Navigator>
        <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown:false}}
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
        name="Home"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListaMascota"
        component={ListaMascota}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Mascota"
        component={Mascota}
        options={{ headerShown: true }}
      /> */}
       <Stack.Screen
        name="DetallesMascota"
        component={DetallesMascota}
        options={{ headerShown: true }}
        
      /> 
    </Stack.Navigator>
      
  );
};

export default RootNavigation;
