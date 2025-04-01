import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import BasicButtom from '../../components/BasicButtom';
import BasicInput from '../../components/BasicInput';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/icon.png')}
      />
      <View style={styles.inputContainer}>
        <BasicInput placeholder="E-Mail" />
        <BasicInput placeholder="Senha" />
      </View>
      <View style={styles.buttonContainer}>
        <BasicButtom
          title="Entrar"
          color="#BCE5FA"
          textColor="#fff"
          width={265}
          height={45}
        />
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
