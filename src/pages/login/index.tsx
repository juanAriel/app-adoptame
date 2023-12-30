import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../../components/atoms/input";
import HomeProps from "../welcome/interface";


const Login : React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.containerH}>
      <Text style={styles.textTile}>Login</Text>
      <View style={styles.container}>
        <Text style={styles.textTitleForm}>Correo</Text>
        <Input style={styles.textWitch} placeholder="ejemplo@gmail.com" />
        <Text style={styles.textTitleForm}>Contrasenia</Text>
        <Input style={styles.textWitch} placeholder="******" />
     
     
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButtonContainer}
          onPress={() => console.log("aqui tambien al home ")}
        >
          <Text style={styles.customButtonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customButtonContainer}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.customButtonText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CEEEF",
    fontWeight: "bold",
    justifyContent: "center",
    width: 380,
    margin: 30,
    height: 250,
    borderRadius: 25,
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
    marginLeft: 20,
    marginTop: 10,
  },
  textWitch: {
    height: 40,
    margin: 5,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20, 
    justifyContent: "space-between",
  },
  customButtonContainer: {
    width: 184,
    height: 54,
    left: 5,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#17BAC0",
    justifyContent: "center",
    alignItems: "center",
  },
  customButtonText: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: "Roboto",
    color: "#FFFFFF",
  },
});
