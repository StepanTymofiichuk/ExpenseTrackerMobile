import React, {useContext} from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  console.log(transactions)
  return (
    <View style={styles.txList}>
        <Text style={{fontFamily: 'Verdana', fontSize: 20}}>History</Text>
        <ScrollView style={styles.txContainer}>
          {transactions. length > 0 && transactions.map(transaction => (
            <View style={styles.tx} key={transaction.id}>
              <Text>{transaction.title}</Text>
              <Text>{transaction.amount}</Text>
              <Text>{transaction.date}</Text>
            </View>
          ))}
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
      padding: 4,
      marginTop: 4,
      color: '#333',
    }
})
export default TransactionList
