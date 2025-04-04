import { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [isLogged, setIsLogged] = useState<null | boolean>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('user');
      setIsLogged(!!user); 
    };

    checkLogin();
  }, []);

  if (isLogged === null) return null;

  return <Redirect href={isLogged ? "/dashboard" : "/welcome"} />;


  //return <Redirect href={isLogged ? "/dashboard" : "/welcome"} />;
}
