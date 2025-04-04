import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import styles from "./styles";
import BasicButton from "../../components/BasicButton";
import BasicInput from "../../components/BasicInput";
import DateSelector from "../../components/DateSelector";
import DaySelector from "../../components/DaySelector";
import CategorySelector from "../../components/CategorySelector";
import { createHabit } from '../../services/api';

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("08:00"); 
  const [endTime, setEndTime] = useState("09:00"); 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);

  const router = useRouter();

  const handleSave = async () => {
    if (!title || !startTime || !endTime || !selectedCategory) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const userData = await AsyncStorage.getItem('user');
      const user = JSON.parse(userData);

      const habitData = {
        user: user?.id, // ⬅️ aqui estamos mandando o ID do usuário
        title,
        description,
        start_time: startTime,
        end_time: endTime,
        location: selectedCategory,
      };

      const { ok, data } = await createHabit(habitData);

      if (ok) {
        Alert.alert("Sucesso", "Hábito salvo com sucesso!");
        router.replace("/dashboard");
      } else {
        console.log("Erro:", data);
        Alert.alert("Erro", data.message || "Erro ao salvar hábito.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao salvar hábito.");
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
            <Text style={styles.textTitle}>Defina seu hábito</Text>

            <View style={styles.inputContainer}>
              <BasicInput
                placeholder="Hábito"
                backgroundColor="#FFF"
                value={title}
                onChangeText={setTitle}
              />

              <CategorySelector
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                placeholder="Selecione uma categoria"
                categories={["Tecnologia", "Saúde", "Educação", "Finanças", "Esportes", "Música", "Arte"]}
                borderRadius={20}
                width={300}
                height={60}
              />

              <DateSelector backgroundColor="#FFF" />

              <DaySelector
                selectedDays={selectedDays}
                onSelectDay={setSelectedDays}
                placeholder="Selecione os dias"
              />

              <BasicInput
                placeholder="Descrição"
                backgroundColor="#FFF"
                value={description}
                onChangeText={setDescription}
              />
            </View>

            <View style={styles.buttonContainer}>
              <BasicButton
                title="Salvar"
                textColor="#fff"
                width={255}
                height={55}
                onPress={handleSave}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Create;
