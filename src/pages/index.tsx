import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import Button from "../components/atoms";
import Input from "../components/atoms/input";


const image = {uri: '../../assets/favicon.png'};

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageApp} source={image} >
        {/* <Image source={image} /> */}
      </ImageBackground>
        <Text style={styles.textHome}> Bienvenido </Text>
      <Button />
      <Button />
      <Input />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textHome: {
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  imageApp: {
    backgroundColor: "#79afa0",
    borderRadius: 200,
    width: 250,
    height: 250,
  }
});
