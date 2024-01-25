import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import DetallesMascotaProps from "./interface";

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

const TextTitle = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 87px;
`;

const DetailText = styled.Text`
color: #ffffff;
font-weight: bold;
font-size: 20px;
margin-bottom: 25px;
`;

const DetallesMascota: React.FC<DetallesMascotaProps> = ({ route }) => {
  const { mascotaKey } = route.params;
  const [mascotaData, setMascotaData] = useState(null);

  useEffect(() => {
    const databaseRef = database().ref(`/mascota/${mascotaKey}`);

    const handleDataChange = (snapshot) => {
      const data = snapshot.val();
      setMascotaData(data);
    };

    databaseRef.on('value', handleDataChange);

    return () => {
      databaseRef.off('value', handleDataChange);
    };
  }, [mascotaKey]);

  useEffect(() => {
    const userSesionOn = auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log('usuario no logeado');
      }
      console.log('el usuario:', user);
    });
    console.log('estamos en sesion con el usuario:');
    return userSesionOn;
  }, []);

  return (
    <MainViewInfo>
      <ViewInfomacionOptions>
        <TextTitle>Detalle de mascotas</TextTitle>
        {mascotaData ? (
          <View>
            <DetailText>Foto: {mascotaData.foto}</DetailText>
            <DetailText>Nombre: {mascotaData.nombre}</DetailText>
            <DetailText>Edad: {mascotaData.edad}</DetailText>
            <DetailText>Raza: {mascotaData.raza}</DetailText>
            <DetailText>Tipo: {mascotaData.tipo}</DetailText>
            
          
          </View>
        ) : (
          <Text>Cargando detalles de la mascota...</Text>
        )}
     
      </ViewInfomacionOptions>
    </MainViewInfo>
  );
};

export default DetallesMascota;
