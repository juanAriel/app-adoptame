import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home1 from "../pages/home";
import Especies from "../pages/especies";
import InformacionUsuario from "../pages/informacion";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "white",
  },
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home1"
        component={Home1}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../../assets/images/icons/home.png")
                    : require("../../assets/images/icons/home-outline.png")
                }
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? "blue" : "black",
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Especies"
        component={Especies}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../../assets/images/icons/location.png")
                    : require("../../assets/images/icons/location-outline.png")
                }
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? "blue" : "black",
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="InformacionUsuario"
        component={InformacionUsuario}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../../assets/images/icons/user.png")
                    : require("../../assets/images/icons/user-outline.png")
                }
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? "blue" : "black",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
