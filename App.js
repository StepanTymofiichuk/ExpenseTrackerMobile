import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpences from './components/IncomeExpences';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { GlobalProvider } from './context/GlobalState';

export default function App() {
  return (
    <GlobalProvider>
      <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.mainContainer}>
          <Header />
          <Balance />
          <IncomeExpences />
          <TransactionList />
          <AddTransaction />
          <StatusBar style="auto" />
        </View>
      </View>
      </ScrollView>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f7f7f7',
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    marginTop: '10%',
    marginLeft: '5%'
  }
});
