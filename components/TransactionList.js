import React, {useContext} from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { GlobalContext } from '../context/GlobalState';
import { useFonts, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  console.log(transactions)
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.txList}>
        <Text style={{fontFamily: 'Inter_700Bold', fontSize: 20}}>History</Text>
        <ScrollView style={styles.txContainer}>
          {transactions. length > 0 ? transactions.map(transaction => (
            <View style={styles.tx} key={transaction.id}>
              <Text style={{fontFamily: 'Inter_500Medium', fontSize: 18}}>{transaction.title}</Text>
              <Text style={{fontFamily: 'Inter_500Medium', fontSize: 14}}>{transaction.amount}</Text>
              <Text style={{fontFamily: 'Inter_500Medium', fontSize: 14}}>{transaction.date}</Text>
            </View>
          )) : <Text style={{fontFamily: 'Inter_500Medium', fontSize: 14, textAlign: 'center'}}>Transactions will appear here</Text>}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    txList: {
        paddingTop: 15,
    },
    txContainer: {
      marginBottom: 8,
      padding: 0,
    },
    tx: {
      backgroundColor: '#fff',
      paddingTop: 8,
      paddingBottom: 8,
      marginTop: 8,
      color: '#333',
    }
})
export default TransactionList
