import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import BasicButtom from '../../components/BasicButtom';
import BasicInput from '../../components/BasicInput';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <BasicButtom
        title="Entrar"
        color="#28a745"
        textColor="#fff"
        
      />
      <BasicInput
        placeholder="Digite seu E-Mail"/>
        value="email"
        <BasicInput
        placeholder="Digite sua Senha"/>
        value="senha"
    </View>
  );
};

export default Welcome;