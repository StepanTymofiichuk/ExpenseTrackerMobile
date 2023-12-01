import React, {useContext} from 'react'
import { View, Text } from 'react-native';
import { GlobalContext } from '../context/GlobalState';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  //console.log(amounts)
  const total = amounts.length > 0 ? amounts.reduce((acc, item) => (acc += item)).toFixed(2) : amounts.length
  let [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{marginTop: 15}}>
        <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 15 }}>Your Balance</Text>
        <Text style={{ fontFamily: 'Inter_500Medium', fontSize: 30 }}>${total}</Text>
    </View>
  )
}

export default Balance