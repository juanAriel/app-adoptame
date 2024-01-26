
import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import ButtonComponent from "../../components/atoms/button";
import EspeciesProps from './interface';
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
  margin-bottom: 50px;
`;

const Especies: React.FC<EspeciesProps> = ({ navigation,title }) => {
  const ButtonContainer = styled.View`
  margin-bottom: 20px;
`;

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
  const handleViewListPet = (title:string) => {
    console.log('Título:', title);
    navigation.navigate("DetallesMascota",{titulo:title})
  };
  return (
    <MainViewInfo>
      <ViewInfomacionOptions>
        <TextTitle>Especies</TextTitle>
        <ButtonContainer>
        <ButtonComponent title="Perros"  onPress={() => handleViewListPet("1")}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Gatos" onPress={() => handleViewListPet("2")}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Aves" onPress={() => handleViewListPet("3")}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Roedores" onPress={handleViewListPet}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Vacas" onPress={handleViewListPet}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Reptiles" onPress={handleViewListPet}/>
        </ButtonContainer>
      </ViewInfomacionOptions>
    </MainViewInfo>
  );
};

export default Especies;

function database() {
  throw new Error('Function not implemented.');
}
