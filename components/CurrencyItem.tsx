import React from 'react'
import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native'
type CurrencyConverterProps = PropsWithChildren<{
    name: string;
    flag: string;
}>
const CurrencyItem = (props: CurrencyConverterProps): JSX.Element => {
    return (
        <View style={styles.topContainer}>
            <View style={styles.container}>
                <Text style={styles.flag}>{props.flag}</Text>
                <Text>{props.name}</Text>
            </View>
        </View>
    )
}

export default CurrencyItem

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        height: 100,
        borderColor: "#1981d6",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        margin: 10,
        gap: 10,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    flag: {
        fontSize: 50
    }
})