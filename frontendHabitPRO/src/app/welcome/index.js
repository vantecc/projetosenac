import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import BasicButton from '../../components/BasicButton'; // ou CustomButton, se for o nome real
import styles from './styles';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Habit<Text style={styles.logoBold}>PRO</Text>
      </Text>

      <Text style={styles.slogan}>
        Construa hábitos, transforme sua rotina.
      </Text>

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
      />
    </View>
  );
}
