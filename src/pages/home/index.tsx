import React, { useRef } from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background-color: #9DFFFF;
  align-items: center;
  justify-content: center;
`;

const CarouselItem = styled.View`
  width: ${width}px;
  height: 300px;
`;

const CarouselImage = styled.Image`
  width: 100%;
  height: 100%;
  resizeMode: cover;
  border-radius: 20px;
`;

const TextContainer = styled.View`
align-items: center;
justify-content: flex-start; /* Ajusta la alineación vertical en la parte superior */
margin-vertical: 75px; /* Ajusta el margen vertical */
`;

const TextTitle = styled.Text`
  color: #17BAC0;
  font-size: 30px;
  text-align: center;
  font-family: "Roboto";
  color: #FFFFFF;
`;

const Home1 = () => {
  const scrollViewRef = useRef();

  const imagenes = [
    'https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg',
    'https://www.selwo.es/content/dam/swa/images/descubre-el-zoo/especies-y-territorios/animales/panda-rojo/Panda-rojo-Selwo-Aventura-13.jpg',
    'https://www.buenoyvegano.com/wp-content/uploads/2021/03/PETA-2.jpg',
  ];

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    console.log('Índice actual:', index);
  };

  return (
    <Container>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={200}
        contentContainerStyle={{ marginTop: 100 }}
      >
        {imagenes.map((imagen, index) => (
          <CarouselItem key={index}>
            <CarouselImage source={{ uri: imagen }} />
          </CarouselItem>
        ))}
      </ScrollView>

      <TextContainer>
        <TextTitle>
          BIENVENIDOS A ADOPTA, UNA APLICACIÓN PARA AYUDAR A ENCONTRAR UN HOGAR A NUESTROS AMIGOS
        </TextTitle>
      </TextContainer>
    </Container>
  );
};

export default Home1;
