import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../../components/atoms/input";
import RegisterProps from "../welcome/interface";
import styled from 'styled-components/native';
import database from '@react-native-firebase/database';

const ViewContainer = styled.View`
  background-color: #9DFFFF;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TextTitle = styled.Text`
  color: #17BAC0;
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px; 
`;

const FormContainer = styled.View`
  background-color: #7CEEEF;
  justify-content: center;
  width: 375px;
  margin: 30px;
  height: 500px;
  border-radius: 25px;
`;

const TextFormTitle = styled.Text`
  color: #17BAC0;
  font-size: 20px;
  margin-left: 20px;
`;

const TextInput = styled(Input)`
  height: 40px;
  margin: 5px;
  padding: 10px;
  background-color: #FFFFFF;
`;

const RegisterButton = styled(TouchableOpacity)`
  width: 150px;
  height: 54px;
  border-radius: 20px;
  background-color: #17BAC0;
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
color: #FFFFFF;
`;

const Register : React.FC<RegisterProps> = ({ navigation }) => {
 const [ci,setCi]=useState("");
 const [nombre,setNombre]=useState("");
 const [edad,setEdad]=useState("");
 const [contresenia,setContresenia]=useState("");
 const [celular,setCelular]=useState("");
 const [correo,setCorreo]=useState("");

 const registerUsers =async () =>{
  try {
    const userId= database().ref('/user').push().key;
    console.log(userId);
    await database().ref(`/user/${userId}`).set({
      ci:ci,
      nombre,
      edad,
     contresenia,
      celular,
      correo,
    });
    console.log('Registrado',userId);
    navigation.navigate("Login");
  }
  catch (error){
  console.error('Error al registrar',error);

  }
 }
  return (
    <ViewContainer>
    <TextTitle>REGISTRO</TextTitle>
    <FormContainer>
      <TextFormTitle>Ci</TextFormTitle>
      <TextInput value={ci} onChangeText={setCi}   placeholder="65265498" />
      <TextFormTitle>Nombre</TextFormTitle>
      <TextInput value={nombre} onChangeText={setNombre} placeholder="Nombre" />
      <TextFormTitle>Edad</TextFormTitle>
      <TextInput value={edad} onChangeText={setEdad} placeholder="Edad" />
      <TextFormTitle>Contrasenia</TextFormTitle>
      <TextInput value={contresenia} onChangeText={setContresenia} placeholder="**********" />
      <TextFormTitle>Celular</TextFormTitle>
      <TextInput value={celular} onChangeText={setCelular} placeholder="70000001" />
      <TextFormTitle>Correo</TextFormTitle>
      <TextInput value={correo} onChangeText={setCorreo} placeholder="ejemplo@gmail.com" />
    </FormContainer>
    <RegisterButton onPress={registerUsers}>
      <RegisterButtonText>Registrar</RegisterButtonText>
    </RegisterButton>
  </ViewContainer>
  );
};

export default Register;
