import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Item = ({ title }: { title: string }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Item
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#0ab999',
        padding: 10,
        margin: 8,
        width: 120,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        borderRadius: 4,

    },
    title: {
        color: "#fff",
        fontSize: 14
    }
});


