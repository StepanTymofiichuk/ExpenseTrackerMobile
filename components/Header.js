import React from 'react';
import { Text } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Header = () => {
    let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Text style={{ fontFamily: 'Inter_900Black', fontSize: 30 }}>ExpenseTracker</Text>
  )
}

export default Header