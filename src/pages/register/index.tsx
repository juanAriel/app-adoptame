import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components/native";
import database from "@react-native-firebase/database";
import RegisterProps from "../welcome/interface";
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

/* const TextInput = styled(Input)`
  height: 40px;
  margin: 5px;
  padding: 10px;
  background-color: #FFFFFF;
`; */

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

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [ci, setCi] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [contresenia, setContresenia] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");

  const registerAuthFirebase= async (correo:String, password:String)=>{
    
    try {
      if(!correo || !password){
        return;
      }
      const userCredential = await auth().createUserWithEmailAndPassword(correo, password);
      console.log("registro del auth Exitoso", userCredential.user)
    } catch (error) {
      console.error('Error al registrar auth', error);
    }
    console.log("los datos que me llegan son:", correo , "password", password);
  }



  const registerUsers = async () => {
    try {
      if (!ci || !nombre || !edad || !contresenia || !celular || !correo) {
        console.error("Todos los campos deben ser completados");
        return;
      }

      const nuevoRegistro = database().ref("/user").push();

      await nuevoRegistro.set({
        ci: ci,
        nombre: nombre,
        edad: edad,
        contresenia: contresenia,
        celular: celular,
        correo: correo,
      });

      console.log("Registro exitoso");
      registerAuthFirebase(correo,contresenia);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error al registrar", error);
    }
  };

  return (
    <ViewContainer>
      <TextTitle>REGISTRO</TextTitle>
      <FormContainer>
        <TextFormTitle>Ci</TextFormTitle>
        <TextInput
          value={ci}
          onChangeText={(text) => setCi(text)}
          placeholder="65265498"
        />
        <TextFormTitle>Nombre</TextFormTitle>
        <TextInput
          value={nombre}
          onChangeText={(text) => setNombre(text)}
          placeholder="Nombre"
        />
        <TextFormTitle>Edad</TextFormTitle>
        <TextInput
          placeholder="Edad"
          value={edad}
          onChangeText={(text) => setEdad(text)}
        />
        <TextFormTitle>Contrasenia</TextFormTitle>
        <TextInput
          value={contresenia}
          onChangeText={(text) => setContresenia(text)}
          placeholder="**********"
        />
        <TextFormTitle>Celular</TextFormTitle>
        <TextInput
          value={celular}
          onChangeText={(text) => setCelular(text)}
          placeholder="70000001"
        />
        <TextFormTitle>Correo</TextFormTitle>
        <TextInput
          value={correo}
          onChangeText={(text) => setCorreo(text)}
          placeholder="ejemplo@gmail.com"
        />
      </FormContainer>
      <RegisterButton onPress={registerUsers}>
        <RegisterButtonText>Registrar</RegisterButtonText>
      </RegisterButton>
    </ViewContainer>
  );
};

export default Register;
