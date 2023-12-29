import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonProps from './inteface'

const Button = (props:any) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPres}>
        <Text style={styles.textButton}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        
        backgroundColor: '#17BAC0"',
        alignItems: 'center',
        paddingHorizontal: 70,
        paddingVertical: 10,
        borderRadius:8,
      },
      textButton: {
        color: '#ffffff',
        fontSize: 20,
      },
})