import { TouchableOpacity, Image, Platform } from "react-native";
import styled from "styled-components/native";
import RegisterProps from "../registerMascota/interface";
import HomeProps from "../welcome/interface";
import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
//import * as ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';

import ImagePicker, {
  launchImageLibrary,
  ImagePickerResponse,
} from "react-native-image-picker";
import storage from '@react-native-firebase/storage'

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
  height: 400px;
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

  const chooseImage = () => {
    const user = auth().currentUser;
    if (!user) {
      console.log("Usuario no logeado");
      return;
    }
    launchImageLibrary({},async (response: ImagePickerResponse) => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setFoto(selectedImage.uri || "");

        const imageName = user.uid + selectedImage.uri;
        const reference = storage().ref().child(`gatos/${imageName}`);
        try {
          await reference.putFile(selectedImage.uri);
          if (Platform.OS === 'android') {
            const tempImagePath = selectedImage.uri.replace('file://', '');
            await RNFS.unlink(tempImagePath);
          }
          console.log("Imagen subida correctamente al almacenamiento de Firebase");
        } catch (error) {
          console.error("Error al subir la imagen al almacenamiento de Firebase", error);
        }
      }
    });
  };

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
        estado: true,
        nombre: nombre,
        foto: foto,
        edad: edad,
        tipo: tipo,
        raza: raza,
      });

      console.log("Registro de mascota exitoso");
      navigation.navigate("ListaMascota");
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
        <TouchableOpacity onPress={chooseImage}>
          {foto ? (
            <Image
              source={{ uri: foto }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          ) : (
            <InputText placeholder="Seleccionar foto" editable={false} />
          )}
        </TouchableOpacity>
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
