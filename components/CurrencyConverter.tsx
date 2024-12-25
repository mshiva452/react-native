import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import CurrencyItem from './CurrencyItem';


export const currencyByRupee: Currency[] = [
    {
        name: 'DOLLAR',
        value: 0.012271428,
        flag: '🇺🇸',
        symbol: '$',
    },
    {
        name: 'EURO',
        value: 0.01125809,
        flag: '🇪🇺',
        symbol: '€',
    },
    {
        name: 'POUND',
        value: 0.0099194378,
        flag: '🇬🇧',
        symbol: '£',
    },
    {
        name: 'RUBEL',
        value: 0.85040469,
        flag: '🇷🇺',
        symbol: '₽',
    },
    {
        name: 'AUS DOLLAR',
        value: 0.01732574,
        flag: '🇦🇺',
        symbol: 'A$',
    },
    {
        name: 'CAN DOLLAR',
        value: 0.016457908,
        flag: '🇨🇦',
        symbol: 'C$',
    },
    {
        name: 'YEN',
        value: 1.5909089,
        flag: '🇯🇵',
        symbol: '¥',
    },
    {
        name: 'DINAR',
        value: 0.0037446993,
        flag: '🇰🇼',
        symbol: 'KD',
    },
    {
        name: 'BITCOIN',
        value: 0.000000543544886,
        flag: '🎰',
        symbol: '₿',
    },
];

const CurrencyConverter = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [convertedCurrency, setConvertedCurrency] = useState<string>("");
    const [selectedCurrency, setSelectedCurrency] = useState<string>("");
    const currencyConversion = (currency: Currency) => {
        if (!inputValue) {
            return Snackbar.show({
                text: 'Enter a value to convert',
                backgroundColor: '#dd4e11',
                textColor: "#ffffff",
            });
        }
        const inputAmount = parseFloat(inputValue)
        if (!isNaN(inputAmount)) {
            const result = currency.value * Number(inputValue);
            const updatedCurrency = `${currency.symbol} ${result.toFixed(2)}`
            setSelectedCurrency(currency.name)
            setConvertedCurrency(updatedCurrency);
        } else {
            return Snackbar.show({
                text: 'Enter a valid number',
                backgroundColor: '#dd4e11',
                textColor: "#ffffff",
            });
        }

    }
    return (
        <View style={styles.container}>
            <Text>Currency Converator</Text>
            <View style={styles.inputContainer}>
                <View style={{ flex: 1, elevation: 5, flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", gap: 10 }}>
                    <Text style={{ fontSize: 30 }}>₹</Text>
                    <TextInput
                        style={styles.currenyInput}
                        inputMode='numeric'
                        onChangeText={setInputValue}
                        value={inputValue}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 30 }}> = {convertedCurrency}</Text>
                </View>
            </View>
            <FlatList
                numColumns={3}
                data={currencyByRupee}
                renderItem={({ item }) =>
                    <Pressable onPress={() => currencyConversion(item)} style={[selectedCurrency === item.name ? { flex: 1, backgroundColor: "#1b8fdd" } : { flex: 1 }]}>
                        <CurrencyItem {...item} />
                    </Pressable>}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

export default CurrencyConverter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        gap: 20
    },
    inputContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 10
    },
    currenyInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#187aca",
        padding: 10,
        fontSize: 20,
        borderRadius: 4,
    }
})