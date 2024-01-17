import React, { useState, useEffect } from "react";
import {  TouchableOpacity, TextInput } from "react-native";
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


const InputText  = styled(TextInput)`
  height: 40px;
  margin: 5px;
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 15px;
`

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
  const [ci, setCi] = useState<number>(0);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState<number>(0);
  const [contresenia, setContresenia] = useState("");
  const [celular, setCelular] = useState<number>(0);
  const [correo, setCorreo] = useState("");

  const handleNumericInputChange = (text: string, setStateFunction: (value: number) => void) => {
    const numericValue = parseInt(text, 10);
    if (!isNaN(numericValue)) {
      setStateFunction(numericValue);
    }
  };
  

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
        <InputText
        value={ci === 0 ? '' : ci.toString()}
        onChangeText={(text) => handleNumericInputChange(text, setCi)}
          placeholder="65265498"
          keyboardType="numeric"
        />
        <TextFormTitle>Nombre</TextFormTitle>
        <InputText
          value={nombre}
          onChangeText={(text) => setNombre(text)}
          placeholder="Nombre"
        />
        <TextFormTitle>Edad</TextFormTitle>
        <InputText
        placeholder="Edad"
        value={edad === 0 ? '' : edad.toString()}
        onChangeText={(text) =>handleNumericInputChange(text, setEdad)}
        keyboardType="numeric"
    />
        <TextFormTitle>Contrasenia</TextFormTitle>
        <InputText
          value={contresenia}
          onChangeText={(text) => setContresenia(text)}
          placeholder="**********"
          secureTextEntry
        />
        <TextFormTitle>Celular</TextFormTitle>
        <InputText
      placeholder="70000001"
      value={celular === 0 ? '' : celular.toString()}
      onChangeText={(text) =>handleNumericInputChange(text, setCelular)}
      keyboardType="numeric"
    />
        <TextFormTitle>Correo</TextFormTitle>
        <InputText
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
