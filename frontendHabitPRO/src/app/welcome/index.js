import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import BasicButton from '../../components/BasicButton/index.js';

import styles from './styles';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HabitPRO</Text>

      <Text style={styles.slogan}>
        Construa hábitos, transforme sua rotina.
      </Text>

      <Link href="/login" asChild>
        <BasicButton title="Entrar" />
      </Link>

      <Link href="/register" asChild>
        <BasicButton title="Criar Conta" variant="outline" />
      </Link>
    </View>
  );
}

