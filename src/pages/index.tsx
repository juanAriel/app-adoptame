import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Button from "../components/atoms";
import Input from "../components/atoms/input";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Image></Image> */}
      <Text style={styles.textHome}> Bienvenido </Text>
      <Button />
      <Button />
      <Input />
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
});
