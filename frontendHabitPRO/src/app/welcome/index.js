import { useRouter } from 'expo-router';
import React, {useEffect, useRef} from 'react';
import { View, Text, Image, Animated,} from 'react-native';
import BasicButton from '../../components/BasicButton';
import styles from './styles';



export default function Welcome() {
  const router = useRouter();


  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 2,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  
  const animatedColor = colorAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['#95e677', '#A0D2EB', '#FAD02C'], // verde, azul, amarelo
  });
  
  

  return (
    <View style={styles.container}>
    <Image
      source={require('../../assets/images/icon.png')}
      style={styles.logo}
    />
  <Animated.Text
  style={[
    styles.slogan,
    {
      fontWeight: 'bold',
      color: animatedColor,
      textAlign: 'center',
    },
  ]}
>
  Construa hábitos, transforme sua rotina.
</Animated.Text>





      <BasicButton
        title="Entrar"
        width={265}
        height={45}
        color="#A0D2EB"
        textColor="#fff"
        onPress={() => router.push('/login')}
      />

      <BasicButton
        title="Criar Conta"
        width={265}
        height={45}
        color="#A0D2EB"
        textColor="#fff"
        onPress={() => router.push('/register')}
        style={{ marginTop: 16 }}
      />
    </View>
  );
}
