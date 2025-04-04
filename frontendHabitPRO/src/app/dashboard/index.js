import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const user = JSON.parse(storedUser);
        setUserName(user?.name || 'Usuário');
      } catch (e) {
        console.error('Erro ao buscar nome do usuário', e);
      }
    };
    fetchUser();
  }, []);
  

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
              <TouchableOpacity>
                <Image style={styles.icon} source={require("../../assets/images/barrs.png")} />
              </TouchableOpacity>

              <View style={styles.userGreetingBox}>
                <Text style={styles.userGreetingText}>Olá, {userName}!</Text>
              </View>

              <TouchableOpacity>
                <Image style={styles.icon} source={require("../../assets/images/config.png")} />
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}></View>

            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.footerItem}
                onPress={() => router.push('/challenges')}
              >
                <Ionicons name="ribbon-outline" size={22} color="#333" />
                <Text style={styles.footerText}>Desafios</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.plusButton}
                onPress={() => router.push('/create')} 
              >
                <Ionicons name="add" size={28} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.footerItem}
                onPress={() => router.push('/progress')} 
              >
                <Ionicons name="bar-chart-outline" size={22} color="#333" />
                <Text style={styles.footerText}>Progresso</Text>
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Dashboard;
