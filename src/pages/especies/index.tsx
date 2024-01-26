
import styled from 'styled-components/native';
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import EspeciesProps from "./interface";
import ButtonComponent from "../../components/atoms/button";
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

const Especies: React.FC<EspeciesProps> = ({ navigation }) => {
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
  const handleViewListPet = () => {
    navigation.navigate("ListaMascota")
  };
  return (
    <MainViewInfo>
      <ViewInfomacionOptions>
        <TextTitle>Especies</TextTitle>
        <ButtonContainer>
        <ButtonComponent title="Perros" onPress={handleViewListPet}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Gatos" onPress={handleViewListPet}/>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonComponent title="Aves" onPress={handleViewListPet}/>
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