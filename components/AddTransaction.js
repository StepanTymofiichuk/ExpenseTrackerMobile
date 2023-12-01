import React, { useContext, useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { GlobalContext } from '../context/GlobalState';
import { useFonts, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';

const AddTransaction = () => {
    const [title, onChangeTitle] = useState('');
    const [amount, onChangeAmount] = useState(0);
    const [date, onChangeDate] = useState('');
    const { addTransaction } = useContext(GlobalContext);
    let [fontsLoaded, fontError] = useFonts({
        Inter_700Bold,
        Inter_500Medium,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
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
        <View style={{ paddingTop: 15 }}>
            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 20 }}>AddTransaction</Text>
            <View style={{ marginTop: 15}}>
            <View style={styles.newTx}>
                <TextInput style={{fontFamily: 'Inter_500Medium', fontSize: 18}} value={title} onChangeText={onChangeTitle} placeholder='Expense Title...' />
            </View>
            <View style={styles.newTx}>
                <TextInput style={{fontFamily: 'Inter_500Medium', fontSize: 18}} value={amount} onChangeText={onChangeAmount} keyboardType='numeric' placeholder='Expense Amount...' />
            </View>
            <View style={styles.newTx}>
                <TextInput style={{fontFamily: 'Inter_500Medium', fontSize: 18}} value={date} onChangeText={onChangeDate} keyboardType='numeric' placeholder='Expense Date...' />
            </View>
            <TouchableOpacity onPress={createNewTx}>
                <Text style={styles.newTxBtn}>Add Transaction</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    newTxContainer: {
        marginBottom: 8,
        padding: 0,
    },
    newTx: {
        backgroundColor: '#fff',
        paddingTop: 8,
        paddingBottom: 8,
        color: '#333',
        marginBottom: 8,
    },
    newTxBtn: {
        backgroundColor: '#9c88ff',
        color: '#fff',
        padding: 8,
        width: '100%',
        textAlign: 'center',
        fontStyle: 'normal',
        fontFamily: 'Inter_700Bold',
        fontSize: 20
    }
})

export default AddTransaction