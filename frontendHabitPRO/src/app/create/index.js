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
import styles from "./styles";
import BasicButton from "../../components/BasicButton";
import BasicInput from "../../components/BasicInput";
import DateSelector from "../../components/DateSelector";
import DaySelector from "../../components/DaySelector";


const Create = () => {

  

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
              <BasicInput
                placeholder="Categoria"
                backgroundColor="#FFF"
              />
              <DateSelector
                backgroundColor="#FFF" />
                <DaySelector/>
            </View>
            <View style={styles.buttonContainer}>
              <BasicButton
                title="Salvar"
                textColor="#fff"
                width={265}
                height={45}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Create;
