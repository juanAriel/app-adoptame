import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import RootNavigation from "./RootNavigation";

const Navigation = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);

export default Navigation;
