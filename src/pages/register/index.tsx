import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../../components/atoms/input";
import RegisterProps from "../welcome/interface";

const Register : React.FC<RegisterProps> = ({ navigation }) => {
  return (
    <View style={styles.containerH}>
      <Text style={styles.textTile}>REGISTRO</Text>
      <View style={styles.container}>
        <Text style={styles.textTitleForm}>Ci</Text>
        <Input style={styles.textWitch} placeholder="65265498" />
        <Text style={styles.textTitleForm}>Nombre</Text>
        <Input style={styles.textWitch} placeholder="Nombre" />
        <Text style={styles.textTitleForm}>Edad</Text>
        <Input style={styles.textWitch} placeholder="Edad" />
        <Text style={styles.textTitleForm}>Contrasenia</Text>
        <Input style={styles.textWitch} placeholder="**********" />
        <Text style={styles.textTitleForm}>Celular</Text>
        <Input style={styles.textWitch} placeholder="70000001" />
        <Text style={styles.textTitleForm}>Correo</Text>
        <Input style={styles.textWitch} placeholder="ejemplo@gmail.com" />
      </View>
      <View>
      <TouchableOpacity style={styles.textButton} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.titleButton}>Register</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CEEEF",
    fontWeight: "bold",
    justifyContent: "center",
    width: 380,
    margin: 50,
    height: 500,
    borderRadius:25,
  },
  containerH: {
    backgroundColor: "#9DFFFF",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  textTile: {
    color: "#17BAC0",
    justifyContent: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  textTitleForm: {
    color: "#17BAC0",
    justifyContent: "center",
    fontSize: 20,
    marginLeft:20,
  },
  textWitch: {
    height: 40,
    margin: 5,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  textButton:{
    width: 184,
    height: 54,
    borderRadius: 20,
    backgroundColor: "#17BAC0",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer:{
    alignItems:'center',
  },
  titleButton: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: "Roboto",
    color: "#FFFFFF",
  },
});
