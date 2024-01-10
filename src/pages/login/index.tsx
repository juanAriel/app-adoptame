import React from "react";
import styled from 'styled-components/native';
import Input from "../../components/atoms/input";
import HomeProps from "../welcome/interface";

const Container = styled.View`
  background-color: #9DFFFF;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Title = styled.Text`
  color: #17BAC0;
  font-size: 40px;
  font-weight: bold;
  justify-content: center;
`;

const FormContainer = styled.View`
  background-color: #7CEEEF;
  justify-content: center;
  width: 380px;
  margin: 30px;
  height: 250px;
  border-radius: 25px;
  font-weight: bold;
`;

const FormText = styled.Text`
  color: #17BAC0;
  font-size: 20px;
  margin-left: 20px;
  margin-top: 10px;
  justify-content: center;
`;

const FormInput = styled(Input)`
  height: 40px;
  margin: 5px;
  padding: 10px;
  background-color: #FFFFFF;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;

const CustomButton = styled.TouchableOpacity`
  width: 184px;
  height: 54px;
  margin-right: 10px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #17BAC0;
  justify-content: center;
  align-items: center;
  left: 5px;
`;

const CustomButtonText = styled.Text`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  font-family: "Roboto";
  color: #FFFFFF;
`;

const Login: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Container>
      <Title>Login</Title>
      <FormContainer>
        <FormText>Correo</FormText>
        <FormInput placeholder="ejemplo@gmail.com" />
        <FormText>Contraseña</FormText>
        <FormInput placeholder="******" />
      </FormContainer>
      <ButtonContainer>
        <CustomButton onPress={() => navigation.navigate("Home")}>
          <CustomButtonText>Ingresar</CustomButtonText>
        </CustomButton>
        <CustomButton onPress={() => navigation.navigate("Welcome")}>
          <CustomButtonText>Salir</CustomButtonText>
        </CustomButton>
      </ButtonContainer>
    </Container>
  );
};

export default Login;
