import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const Input = (props:any) => {
  return (
    <View style={styles.containerMain}>
      <TextInput style={styles.inputStyle} placeholder={props.placeholder}/>  
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  containerMain:{
    width:340,
    marginLeft:20,
  },
  inputStyle: {
      backgroundColor: '#fafafa',
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius:15,
    }
})