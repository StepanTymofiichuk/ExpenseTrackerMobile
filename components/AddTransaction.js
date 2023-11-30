import React, { useContext, useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {
    const [title, onChangeTitle] = useState('');
    const [amount, onChangeAmount] = useState(0);
    const [date, onChangeDate] = useState('');
    const { addTransaction } = useContext(GlobalContext);
    const createNewTx = () => {
        console.log('Pressed');
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            title,
            amount: +amount,
            date,
          }
          addTransaction(newTransaction);
          onChangeTitle('');
          onChangeAmount(0);
          onChangeDate('');
    }
    return (
        <View>
            <Text>AddTransaction</Text>
            <View style={styles.newTx}>
                <TextInput value={title} onChangeText={onChangeTitle} placeholder='Expense Title...' />
            </View>
            <View style={styles.newTx}>
                <TextInput value={amount} onChangeText={onChangeAmount} keyboardType='numeric' placeholder='Expense Amount...'/>
            </View>
            <View style={styles.newTx}>
                <TextInput value={date} onChangeText={onChangeDate} placeholder='Expense Date...'/>
            </View>
            <TouchableOpacity onPress={createNewTx}>
                <Text style={styles.newTxBtn}>Add Transaction</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    newTxContainer: {
      marginBottom: '8px',
      padding: 0,
    },
    newTx: {
      backgroundColor: '#fff',
      paddingTop: '8px',
      paddingBottom: '8px',
      color: '#333',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowRadius: '5px',
      shadowOpacity: '2px',
      shadowOffset: '2px',
      fontSize: '16px',
      marginBottom: '8px'
    },
    newTxBtn: {
        backgroundColor: '#9c88ff',
        color: '#fff',
        padding: '8px',
        width: '100%',
        textAlign: 'center',
        fontStyle: 'normal',
        fontSize: '18px'
    }
})

export default AddTransaction