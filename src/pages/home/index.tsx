import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import image1 from '../../../assets/images/carousel/image1.jpg';
import image2 from '../../../assets/images/carousel/image2.jpg';
import image3 from '../../../assets/images/carousel/image3.jpg';

const { width } = Dimensions.get('window');
const images = [image1, image2, image3];


const Container = styled.View`
  flex: 1;
  background-color: #9DFFFF;
  align-items: center;
  justify-content: center;
`;

const CarouselItem = styled.View`
  width: 360px;
  height: 300px;
`;

const CarouselImage = styled.Image`
  width: 100%;
  height: 100%;
  resize: cover;
  border-radius: 20px;
`;

const TextContainer = styled.View`
align-items: center;
justify-content: flex-start;
margin-top:55px;
margin-bottom:75px;
`;

const TextTitle = styled.Text`
  color: #17BAC0;
  font-size: 30px;
  text-align: center;
  font-family: "Roboto";
  color: #FFFFFF;
`;

const Home = () => {
 /*  const scrollViewRef = useRef();

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
  ); */

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const totalSlides = 3; 

  const renderSlides = () => {
    return Array.from({ length: totalSlides }).map((_, index) => (
      <CarouselItem key={index} >
        <ImageBackground
          /* source={ require(`../../../assets/images/carousel/image1.jpg`)  } */
          source={images[index]}
          
          style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
        </ImageBackground>
      </CarouselItem>
    ));
  };

  return (
    <Swiper
      loop={true}
      autoplay={false}
      index={currentIndex}
      onIndexChanged={(index) => setCurrentIndex(index)}
    >
      {renderSlides()}
    </Swiper>
  );
}

export default Home;
