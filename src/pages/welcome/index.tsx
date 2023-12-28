import { StyleSheet, View, Text, ImageBackground, Button } from "react-native";
import React from "react";
//import Button from "../../components/atoms";
import Input from "../../components/atoms/input";
import HomeProps from "./interface";


const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
      <View style={styles.container}>
          <ImageBackground
              imageStyle={{ borderRadius: 250 }}
              style={styles.imageApp}
              source={require("../../../assets/images/welcome.png")}
          />
          <Text style={styles.textHome}> Bienvenido </Text>
          <Button title="Register" onPress={ ()=> navigation.navigate("Register")}/>
          <Input/>
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
    width: 350,
    height: 350,
    bottom: 50
  }
});
