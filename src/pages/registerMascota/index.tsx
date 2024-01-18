
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import RegisterProps from "../registerMascota/interface";
import HomeProps from "../welcome/interface";
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';
const ViewContainer = styled.View`
  background-color: #9dffff;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TextTitle = styled.Text`
  color: #17bac0;
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px;
`;

const FormContainer = styled.View`
  background-color: #7ceeef;
  justify-content: center;
  width: 375px;
  margin: 30px;
  height: 500px;
  border-radius: 25px;
`;

const TextFormTitle = styled.Text`
  color: #17bac0;
  font-size: 20px;
  margin-left: 20px;
`;

const InputText = styled.TextInput`
  height: 40px;
  margin: 5px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const RegisterButton = styled(TouchableOpacity)`
  width: 150px;
  height: 54px;
  border-radius: 20px;
  background-color: #17bac0;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const RegisterButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  font-family: "Roboto";
  color: #ffffff;
`;

const Mascota: React.FC<RegisterProps> = ({ navigation }) => {
  useEffect(()=>{
    const userSesionOn = auth().onAuthStateChanged((user)=>{
      if (!user) {
        console.log("usuario no logeado");
        
      }
      console.log(" el usuario:",user);
    })
    console.log("estamos en sesion con el usuario:");
    return userSesionOn;
  })
  return (
    <ViewContainer>
      <TextTitle>REGISTRO MASCOTAS</TextTitle>
      <FormContainer>
        <TextFormTitle>Nombre</TextFormTitle>
        <InputText placeholder="Nombre" />
        <TextFormTitle>Foto</TextFormTitle>
        <InputText placeholder="Foto" />
        <TextFormTitle>Edad</TextFormTitle>
        <InputText placeholder="Edad" keyboardType="numeric" />
        <TextFormTitle>Tipo</TextFormTitle>
        <InputText placeholder="Raton" />
        <TextFormTitle>Raza</TextFormTitle>
        <InputText placeholder="Roedor" keyboardType="numeric" />
      </FormContainer>
      <RegisterButton >
        <RegisterButtonText>Registrar</RegisterButtonText>
      </RegisterButton>
    </ViewContainer>
  );
};

export default Mascota;
