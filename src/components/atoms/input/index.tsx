import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const Input = () => {
  return (
    <View>
      <TextInput style={styles.inputStyle}/>  
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputStyle: {
      
      backgroundColor: '#fafafa',
      paddingHorizontal: 160,
      paddingVertical: 10,
      borderRadius:20,
    }
})