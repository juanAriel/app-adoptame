import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonProps from './inteface'

const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>{}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        
        backgroundColor: '#17BAC0',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius:20,
      },
      textButton: {
        color: '#ffffff',
        fontSize: 20,
      },
})