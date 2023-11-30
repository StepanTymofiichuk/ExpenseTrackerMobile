import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { View, StyleSheet, Text } from 'react-native';

const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
  return (
    <View style={styles.expContainer}>
      <View style={styles.column}>
        <Text style={{margin: 0, textTransform: 'uppercase', fontFamily: 'Verdana', fontSize: 20}}>Income</Text>
        <Text style={{margin: 8, fontFamily: 'Verdana', fontSize: 15}}>+${income}</Text>
        {/* Add more elements for the first column */}
      </View>
      <View style={styles.column2}>
        <Text style={{margin: 0, textTransform: 'uppercase', fontFamily: 'Verdana', fontSize: 20}}>Expense</Text>
        <Text style={{margin: 8, fontFamily: 'Verdana', fontSize: 15}}>-${expense}</Text>
        {/* Add more elements for the second column */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  expContainer: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space between the two columns
    backgroundColor: '#fff',
    height: 'auto',
  },
  column: {
    flex: 1, // Each column takes equal space
    textAlign: 'center',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#dedede'
  },
    column2: {
    flex: 1, // Each column takes equal space
    textAlign: 'center',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default IncomeExpences;
