import { ImageBackground } from "react-native";
import React from "react";
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

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate("Register")
  };
  const handleLogin = () => {
    navigation.navigate("Login")
  };
  return (
    <ViewContainer>
      <CircularImage source={require("../../../assets/images/welcome1.png")} />
      <TextHome> Welcome </TextHome>
      <ViewButtonContainer>
        <ButtonComponent title="Register" onPress={handleRegister}/>
        <ButtonComponent title="Login" onPress={handleLogin}/>
      </ViewButtonContainer>
    </ViewContainer>
  );
};

export default Welcome;
