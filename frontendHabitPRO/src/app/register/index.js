import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Alert,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./styles";
import BasicButton from "../../components/BasicButton";
import BasicInput from "../../components/BasicInput";
import { registerUser } from "../../services/api";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";



const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = () => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const isLongEnough = password.length >= 8;
    const notMatchingNameOrEmail =
      !password.includes(name) && !password.includes(email);

    return hasUppercase && hasSpecialChar && isLongEnough && notMatchingNameOrEmail;
  };

  const handleRegister = async () => {
    if (email !== confirmEmail) {
      Alert.alert("Erro", "Os emails não coincidem.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    if (!validatePassword()) {
      Alert.alert(
        "Senha inválida",
        "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um caractere especial e não pode conter seu nome ou email."
      );
      return;
    }

    try {
      const { ok, data } = await registerUser({ name, email, password });

      if (ok) {
        Alert.alert("Sucesso", "Conta criada com sucesso!");
      } else {
        Alert.alert("Erro", data.message || "Erro ao criar conta.");
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            source={require("../../assets/images/image.png")}
            style={styles.container}
          >
            <Text style={styles.textTitle}>Cadastre-se</Text>
            <View style={styles.inputContainer}>
              <BasicInput
                placeholder="Nome"
                value={name}
                onChangeText={setName}
                backgroundColor="#FFF"

              />
              <BasicInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                backgroundColor="#FFF"
              />
              <BasicInput
                placeholder="Confirmar Email"
                value={confirmEmail}
                onChangeText={setConfirmEmail}
                backgroundColor="#FFF"
              />
              <BasicInput
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                backgroundColor="#FFF"
              />
              <BasicInput
                placeholder="Confirmar Senha"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                backgroundColor="#FFF"
              />
            </View>
            <View style={styles.buttonContainer}>
  <BasicButton
    title="Criar Conta"
    width={265}
    height={45}
    onPress={handleRegister}
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
    <Text style={{ fontSize: 16, color: '#333' }}>Criar conta com Google</Text>
  </TouchableOpacity>
</View>

          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Register;
