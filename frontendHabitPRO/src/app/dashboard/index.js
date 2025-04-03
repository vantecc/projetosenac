import {
  View,
  Text,
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import styles from "./styles";


const Dashboard = () => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            source={require("../../assets/images/image(2).png")}
            style={styles.container}
          >
            <View style={styles.user}>
              <TouchableOpacity >
                <Image style={styles.icon} source={require("../../assets/images/barrs.png")} />
              </TouchableOpacity>
              <Text style={styles.textTitle}>Olá “Usuario”</Text>
              <TouchableOpacity >
                <Image style={styles.icon} source={require("../../assets/images/config.png")} />
              </TouchableOpacity>

            </View>
            <View style={styles.inputContainer}></View>
            <View style={styles.buttonContainerContainer}>
              <TouchableOpacity>
                <Image style={styles.buttom} source={require("../../assets/images/buttom.png")} />
              </TouchableOpacity>
            </View>


          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Dashboard;
