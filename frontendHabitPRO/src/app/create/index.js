import {
  View,
  Text,
  ImageBackground,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import React, { useState } from "react";
import BasicButton from "../../components/BasicButton";
import BasicInput from "../../components/BasicInput";
import DateSelector from "../../components/DateSelector";
import DaySelector from "../../components/DaySelector";
import CategorySelector from "../../components/CategorySelector";
import styles from "./styles";


const Create = () => {

  const [selectedDays, setSelectedDays] = useState([]);

  const handleDaySelection = (days) => {
    setSelectedDays(days);
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
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
              />
                <CategorySelector
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategorySelection}
                  placeholder="Selecione uma categoria"
                  categories={["Tecnologia", "Saúde", "Educação", "Finanças", "Esportes", "Música", "Arte"]}
                  borderRadius={20}
                  width={300}
                  height={60}
                />
              <DateSelector
                backgroundColor="#FFF" />
              <DaySelector
                selectedDays={selectedDays}
                onSelectDay={handleDaySelection}
                placeholder="Selecione os dias"
              />
              <BasicInput
                placeholder="Descrição"
                backgroundColor="#FFF"
              />
            </View>
            <View style={styles.buttonContainer}>
              <BasicButton
                title="Salvar"
                textColor="#fff"
                width={255}
                height={55}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Create;
