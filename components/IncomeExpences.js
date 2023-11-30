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
        <Text style={{margin: 0, textTransform: 'uppercase'}}>Income</Text>
        <Text style={{margin: '8px', fontSize: '16px'}}>+${income}</Text>
        {/* Add more elements for the first column */}
      </View>
      <View style={styles.column2}>
        <Text style={{margin: 0, textTransform: 'uppercase'}}>Expense</Text>
        <Text style={{margin: '8px', fontSize: '16px'}}>-${expense}</Text>
        {/* Add more elements for the second column */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  expContainer: {
    marginTop: '15px',
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space between the two columns
    backgroundColor: '#fff',
    height: 'auto',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowRadius: '5px',
    shadowOpacity: '2px',
    shadowOffset: '2px'
  },
  column: {
    flex: 1, // Each column takes equal space
    textAlign: 'center',
    paddingTop: '10px',
    borderRightWidth: '1px',
    borderRightColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center'
  },
    column2: {
    flex: 1, // Each column takes equal space
    textAlign: 'center',
    paddingTop: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default IncomeExpences;
