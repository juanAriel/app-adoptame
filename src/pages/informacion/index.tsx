import { TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import ListaMascotaProps from "./interface";
import ButtonComponent from "../../components/atoms/button";
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';
const MainViewInfo = styled.View`
  flex: 1;
  background-color: #9dffff;
  align-items: center;
  justify-content: center;
`;
const ViewInfomacionOptions = styled.View`
  width: 300px;
  height: 500px;
  background-color: #32dade;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  border-radius: 20px;
`;
const OptionButton = styled(TouchableOpacity)`
  width: 280px;
  height: 54px;
  border-radius: 20px;
  background-color: #1599a5;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const TextButton = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`;
const TextTitle = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 50px;
`;

const InformacionUsuario: React.FC<ListaMascotaProps> = ({ navigation }) => {
  const ButtonContainer = styled.View`
  margin-bottom: 20px;
`;
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
  
  const handleRegister = () => {
    navigation.navigate("Mascota")
  };
  const handleViewListPet = () => {
    navigation.navigate("ListaMascota")
  };
  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate("Login"); 
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
      Alert.alert('Error', 'No se pudo cerrar sesión. Por favor, inténtalo de nuevo.');
    }
  };
  return (
    <MainViewInfo>
      <ViewInfomacionOptions>
        <TextTitle>Opciones</TextTitle>
        <ButtonContainer>
        <ButtonComponent title="Datos Usuario" onPress={handleRegister}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Añadir Mascotas" onPress={handleRegister}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Ver Mascotas" onPress={handleViewListPet}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Salir" onPress={handleLogout} />
        </ButtonContainer>
      </ViewInfomacionOptions>
    </MainViewInfo>
  );
};

export default InformacionUsuario;
