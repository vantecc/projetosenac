import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import BasicButton from '../../components/BasicButton';
import BasicInput from '../../components/BasicInput';
import { loginUser } from "../../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const { ok, data } = await loginUser({ email, password });

      if (ok) {
        Alert.alert("Sucesso", data.message || "Login realizado com sucesso!");
      } else {
        Alert.alert("Erro", data.message || "Credenciais inválidas.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro de rede ou servidor indisponível.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 100 }}>

          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/icon.png')}
            />
            <View style={styles.inputContainer}>
              <BasicInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                backgroundColor="#FFF"
                borderColor="#80DEEA"
              />
              <BasicInput
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                backgroundColor="#FFF"
                borderColor="#80DEEA"
              />
              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttomContainer}>
              <BasicButton
                title="Entrar"
                color="#BCE5FA"
                textColor="#fff"
                width={265}
                height={45}
                onPress={handleLogin}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
