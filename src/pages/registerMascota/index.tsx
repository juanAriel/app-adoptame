
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import RegisterProps from "../registerMascota/interface";
import HomeProps from "../welcome/interface";
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


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
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("");
  const [edad, setEdad] = useState("");
  const [tipo, setTipo] = useState("");
  const [raza, setRaza] = useState("");

  const registerMascota = async () => {
    try {
      const user = auth().currentUser;
      if (!user) {
        console.log("Usuario no logeado");
        return;
      }
      if (!nombre || !foto || !edad || !tipo || !raza) {
        console.error("Todos los campos deben ser completados");
        return;
      }

      const mascotaRef = database().ref(`/mascota`).push();

      await mascotaRef.set({
        id_user: user.uid,
        estado:true,
        nombre: nombre,
        foto: foto,
        edad: edad,
        tipo: tipo,
        raza: raza,
      });

      console.log("Registro de mascota exitoso");
      navigation.navigate("ListaMascota")
    } catch (error) {
      console.error("Error al registrar mascota", error);
    }
  };
  return (
    <ViewContainer>
      <TextTitle>REGISTRO MASCOTAS</TextTitle>
      <FormContainer>
        <TextFormTitle>Nombre</TextFormTitle>
        <InputText
          placeholder="Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <TextFormTitle>Foto</TextFormTitle>
        <InputText
          placeholder="Foto"
          value={foto}
          onChangeText={(text) => setFoto(text)}
        />
        <TextFormTitle>Edad</TextFormTitle>
        <InputText
          placeholder="Edad"
     
          value={edad}
          onChangeText={(text) => setEdad(text)}
        />
        <TextFormTitle>Tipo</TextFormTitle>
        <InputText
          placeholder="Tipo"
          value={tipo}
          onChangeText={(text) => setTipo(text)}
        />
        <TextFormTitle>Raza</TextFormTitle>
        <InputText
          placeholder="Raza"
          value={raza}
          onChangeText={(text) => setRaza(text)}
        />
      </FormContainer>
      <RegisterButton onPress={registerMascota}>
        <RegisterButtonText>Registrar</RegisterButtonText>
      </RegisterButton>
    </ViewContainer>
  );
};
export default Mascota;
