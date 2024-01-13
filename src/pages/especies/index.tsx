import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';

const Especies = () => {
  useEffect(()=>{
    const userSesionOn = auth().onAuthStateChanged((user)=>{
      if (!user) {
        console.log("usuario no logeado");
        
      }
      console.log(" el usuario:",user);
    })
    console.log("estamos en sesion con el usuario:");
    return userSesionOn;
  })
  return (
    <View>
      <Text>Especies</Text>
    </View>
  )
}

export default Especies