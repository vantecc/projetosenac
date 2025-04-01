import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import BasicButton from "../../components/BasicButton";
import BasicInput from "../../components/BasicInput";

const Register = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/image.png")}
      style={styles.container}
    >
      <Text style={styles.textTitle}>Cadastre-se</Text>
      <View style={styles.inputContainer}>
        <BasicInput
          placeholder="Nome"
          backgroundColor="#FFF"
          borderColor="#80DEEA"
        />
        <BasicInput
          placeholder="E-Mail"
          backgroundColor="#FFF"
          borderColor="#80DEEA"
        />
        <BasicInput
          placeholder="Senha"
          backgroundColor="#FFF"
          borderColor="#80DEEA"
        />
      </View>
      <View style={styles.buttonContainer}>
        <BasicButton
          title="Criar Conta"
          color="#BCE5FA"
          textColor="#fff"
          width={265}
          height={45}
        />
      </View>
    </ImageBackground>
  );
};

export default Register;
