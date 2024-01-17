import { ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

//import Input from "../../components/atoms/input";
import WelcomeProps from "./interface";
import styled from "styled-components/native";
import ButtonComponent from "../../components/atoms/button";

const ViewContainer = styled.View`
  background-color: #9dffff;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TextHome = styled.Text`
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 2px;
  color: #000000;
`;

const CircularImage = styled(ImageBackground)`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  overflow: hidden;
  bottom: 5px;
`;

const ViewButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

const CustomTouchableOpacity = styled(TouchableOpacity)`
  width: 150px;
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #17bac0;
  justify-content: center;
  align-items: center;
`;

const CustomButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  font-family: "Roboto";
  color: #ffffff;
`;

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate("Login")
  };
  return (
    <ViewContainer>
      <CircularImage source={require("../../../assets/images/welcome1.png")} />
      <TextHome> Bienvenido </TextHome>
      <ViewButtonContainer>
        <CustomTouchableOpacity onPress={() => navigation.navigate("Register")}>
          <CustomButtonText>Registrar</CustomButtonText>
        </CustomTouchableOpacity>
        <ButtonComponent title="Login" onPress={handleRegister}/>
      </ViewButtonContainer>
    </ViewContainer>
  );
};

export default Welcome;
