import React, {useContext} from 'react'
import { View, Text } from 'react-native';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  //console.log(amounts)
  const total = amounts.length > 0 ? amounts.reduce((acc, item) => (acc += item)).toFixed(2) : amounts.length
  return (
    <View style={{marginTop: '15px'}}>
        <Text style={{margin: 0, letterSpacing: '1px'}}>Your Balance</Text>
        <Text style={{margin: 0}}>${total}</Text>
    </View>
  )
}

export default Balance