import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from 'react'
import Input from '../../components/atoms/input';
import navigation from '../../navigation';


const Register = () => {
  return (
      <View style={styles.containerH}>
          <Text style={styles.textTile}>REGISTRO</Text>
          <View style={styles.container}>
              <TextInput style={styles.textWitch} placeholder="C.I." />
              <TextInput style={styles.textWitch} placeholder="Nombre" />
              <TextInput style={styles.textWitch} placeholder="Edad" />
              <TextInput style={styles.textWitch} placeholder="Contrasenia" />
              <TextInput style={styles.textWitch} placeholder="Celular" />
              <TextInput style={styles.textWitch} placeholder="Correo" />
          </View>
          <Button title="Registrar" />
      </View>
  );
}

export default Register
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8bf7f7",
        fontWeight: "bold",
        justifyContent: "center",
        width: 350,
        margin: 90,
        height: "50%"
    },
    containerH: {
        backgroundColor: "#9DFFFF",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    textTile: {
        justifyContent: "center",
        fontSize: 40,
        fontWeight: "bold",
    },
    textWitch: {
        height: 40,
        margin: 5,
        padding: 10,
        backgroundColor: "#FFFFFF",
    },
});