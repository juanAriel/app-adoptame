import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

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
    <View style={styles.container}>
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
          <View key={index} style={styles.carouselItem}>
            
              <Image source={{ uri: imagen }} style={styles.carouselImage} />
            
          </View>
        ))}
      </ScrollView>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>
          BIENVENIDOS A ADOPTA, UNA APLICACIÓN PARA AYUDAR A ENCONTRAR UN HOGAR A NUESTROS AMIGOS
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: {
    width,
    height: 300,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 35,
  },
  textTitle: {
    color: '#17BAC0',
    fontSize: 35,
    textAlign: 'center',
  },
});

export default Home1;
