import React, {useContext} from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  console.log(transactions)
  return (
    <View style={styles.txList}>
        <Text>History</Text>
        <ScrollView style={styles.txContainer}>
          {transactions. length > 0 && transactions.map(transaction => (
            <View style={styles.tx} key={transaction.id}>
              <Text style={{fontSize: '18px'}}>{transaction.title}</Text>
              <Text style={{fontSize: '16px'}}>{transaction.price}</Text>
              <Text style={{fontSize: '16px'}}>{transaction.date}</Text>
            </View>
          ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    txList: {
        paddingTop: '15px',
    },
    txContainer: {
      marginBottom: '8px',
      padding: 0,
    },
    tx: {
      backgroundColor: '#fff',
      padding: '4px',
      marginTop: '4px',
      color: '#333',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowRadius: '5px',
      shadowOpacity: '2px',
      shadowOffset: '2px'
    }
})
export default TransactionList
