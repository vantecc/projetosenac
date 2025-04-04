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
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import BasicButton from '../../components/BasicButton';
import BasicInput from '../../components/BasicInput';
import { loginUser } from "../../services/api";
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const { ok, data } = await loginUser({ email, password });

      if (ok) {

        await AsyncStorage.setItem('user', JSON.stringify(data.user));


        Alert.alert("Sucesso", data.message || "Login realizado com sucesso!");
        router.replace("/dashboard");
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
              />
              <BasicInput
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                backgroundColor="#FFF"
              />
              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttomContainer}>
              <BasicButton
                title="Entrar"
                textColor="#fff"
                width={265}
                height={45}
                onPress={handleLogin}
              />

              <TouchableOpacity
                onPress={() =>
                  Alert.alert("Atenção", "Funcionalidade de login com Google será implementada futuramente.")
                }
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  width: 265,
                  height: 45,
                }}
              >
                <AntDesign name="google" size={20} color="#DB4437" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 16, color: '#333' }}>Entrar com Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
