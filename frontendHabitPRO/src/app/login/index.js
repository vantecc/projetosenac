import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import BasicButtom from '../../components/BasicButton';
import BasicInput from '../../components/BasicInput';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require('../../assets/images/icon.png')}
      />
      <View style={styles.inputContainer}>
        <BasicInput
          placeholder="E-mail" />
        <BasicInput
          placeholder="Senha" />
        <TouchableOpacity style={styles.forgotPasswordButtom}>
          <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
        </TouchableOpacity>
      <View style={styles.buttomContainer}>
        <BasicButtom
          title="Entrar"
          color="#BCE5FA"
          textColor="#fff"
          width="265"
          height="45"
        />
      </View>
      </View>
    </View>
  );
};

export default Welcome;