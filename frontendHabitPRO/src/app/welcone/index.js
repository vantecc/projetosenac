import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { useRouter } from 'expo-router';
import BasicButtom from "../../components/BasicButtom";

const Welcome = () => {
  const router = useRouter();

  const Login = () => {
    router.push('/login');
  };
  const Register = () => {
    router.push('/register');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/icon.png")}
      />
      <Text style={styles.textTitle}>
        Construa hábitos, transforme sua rotina.
      </Text>
      <View style={styles.buttonContainer}>
        <BasicButtom
          title="Entrar"
          color="#BCE5FA"
          textColor="#fff"
          width={265}
          height={45}
          onPress={Login}
        />
        <BasicButtom
          title="Criar Conta"
          color="#BCE5FA"
          textColor="#fff"
          width={265}
          height={45}
          onPress={Register}
        />
      </View>
    </View>
  );
};

export default Welcome;
