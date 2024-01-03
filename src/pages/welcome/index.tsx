import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

//import Input from "../../components/atoms/input";
import WelcomeProps from "./interface";
import styled from 'styled-components/native';
//import Button from "../../components/atoms/button";


const ViewContainer  = styled.View`
  background-color: #9DFFFF;
  flex: 1 ;
  align-items: center;
  justify-content:center;
`

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <ViewContainer>
      <ImageBackground
        imageStyle={{ borderRadius: 250 }}
        style={styles.imageApp}
        source={require("../../../assets/images/welcome1.png")}
      />
      <Text style={styles.textHome}> Bienvenido </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButtonContainer}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.customButtonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customButtonContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.customButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ViewContainer>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textHome: {
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  imageApp: {
    width: 350,
    height: 350,
    bottom: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
  },
  customButtonContainer: {
    width: 184,
    height: 54,
    left: 5,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#17BAC0",
    justifyContent: "center",
    alignItems: "center",
  },
  customButtonText: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: "Roboto",
    color: "#FFFFFF", 
  },
});
