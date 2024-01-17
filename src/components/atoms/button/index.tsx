import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ButtonProps from "./inteface";
import styled from "styled-components/native";

const CustomTouchableOpacity = styled(TouchableOpacity)`
  width: 150px;
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #17bac0;
  justify-content: center;
  align-items: center;
`;

const CustomButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  font-family: "Roboto";
  color: #ffffff;
`;

const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <View>
      <CustomTouchableOpacity onPress={onPress}>
        <CustomButtonText >{title}</CustomButtonText>
      </CustomTouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#17BAC0"',
    alignItems: "center",
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textButton: {
    color: "#ffffff",
    fontSize: 20,
  },
});
