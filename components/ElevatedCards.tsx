import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.card}>
                <View style={styles.item}>
                    <Text>Tap</Text>
                </View>
                <View style={styles.item}>
                    <Text>Tap</Text>
                </View>
                <View style={styles.item}>
                    <Text>Tap</Text>
                </View>
                <View style={styles.item}>
                    <Text>Tap</Text>
                </View>
                <View style={styles.item}>
                    <Text>Tap</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        paddingHorizontal: 8,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        gap: 5,
        marginTop: StatusBar.currentHeight || 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
    },
    card: {
        padding: 8
    },
    item: {
        flex: 1,
        gap: 5,
        width: 120,
        height: 100,
        margin: 5,
        backgroundColor: '#0ab999',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        shadowColor: "orange",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});