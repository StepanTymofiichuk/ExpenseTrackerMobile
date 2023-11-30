import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpences from './components/IncomeExpences';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { GlobalProvider } from './context/GlobalState';

export default function App() {
  return (
    <GlobalProvider>
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Header />
          <Balance />
          <IncomeExpences />
          <TransactionList />
          <AddTransaction />
          <StatusBar style="auto" />
        </View>
      </View>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  mainView: {
    margin: 0,
    backgroundColor: '#f7f7f7',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'left',
    fontFamily: 'Lato, sans-serif',
    margin: '8px',
  },
});
