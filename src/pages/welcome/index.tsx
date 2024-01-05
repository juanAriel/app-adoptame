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
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const ViewContainer  = styled.View`
  background-color: #9DFFFF;
  flex: 1 ;
  align-items: center;
  justify-content: center;
`

const TextHome = styled.Text`
  justify-content: center;
  font-size: ${width * 0.1}px;
  font-weight: bold;
  margin-bottom: ${height * 0.02}px;
  color: #000000;
`

const CircularImage = styled(ImageBackground)`
  width: ${width * 0.8}px;
  height: ${width * 0.8}px; /* Hacer la imagen cuadrada */
  borderRadius: ${width * 0.4}px; /* Hacer el borde circular */
  overflow: hidden;
  bottom: ${height * 0.05}px;
`

const ViewbuttonContainer = styled.View`
  justify-content: center;
  align-items: center;  /* Centrar horizontalmente los elementos */
  flex-direction: row;
  margin-top: ${height * 0.02}px;
`

const CustomTouchableOpacity = styled(TouchableOpacity)`
  width: ${width * 0.4}px;
  height: ${height * 0.08}px;
  margin-right: ${width * 0.02}px;  /* Ajusta el margen derecho según sea necesario */
  margin-left: ${width * 0.02}px;  /* Ajusta el margen izquierdo según sea necesario */
  border-radius: ${width * 0.05}px;
  overflow: hidden;
  background-color: #17BAC0;
  justify-content: center;
  align-items: center;
`

const CustomButtonText = styled.Text`
  font-size: ${width * 0.05}px;
  font-weight: 600;
  line-height: ${height * 0.04}px;
  letter-spacing: 0;
  text-align: left;
  font-family: "Roboto";
  color: #FFFFFF;
`

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <ViewContainer>
      <CircularImage
        imageStyle={{ borderRadius: 250 }}
        source={require("../../../assets/images/welcome1.png")}
      />
      <TextHome> Bienvenido </TextHome>

      <ViewbuttonContainer>
        <CustomTouchableOpacity
          onPress={() => navigation.navigate("Register")}
        >
          <CustomButtonText>Registrar</CustomButtonText>
        </CustomTouchableOpacity>

        <CustomTouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <CustomButtonText>Login</CustomButtonText>
        </CustomTouchableOpacity>
      </ViewbuttonContainer>
    </ViewContainer>
  );
};

export default Welcome;
