import { TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

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
const InformacionUsuario = () => {
  return (
    <MainViewInfo>
      <ViewInfomacionOptions>
        <TextTitle>Opciones</TextTitle>
        <OptionButton>
          <TextButton>Datos usuario</TextButton>
        </OptionButton>
        <OptionButton>
          <TextButton>Añadir mascota</TextButton>
        </OptionButton>
        <OptionButton>
          <TextButton>Ver mascotas</TextButton>
        </OptionButton>
        <OptionButton>
          <TextButton>Salir</TextButton>
        </OptionButton>
      </ViewInfomacionOptions>
    </MainViewInfo>
  );
};

export default InformacionUsuario;
