import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'

const BackgroundChanger = () => {
    const [bg, setBg] = useState<string>("#0c73b8");
    const handleBackground = () => {
        const hexRande = "0123456789abcdef";
        let color = "#";
        for (let index = 0; index < 6; index++) {
            color += hexRande[Math.floor(Math.random() * 16)];
        }
        setBg(color)
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={bg} />
            <View style={{ backgroundColor: bg, height: "100%" }}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.touhableBtn} onPress={handleBackground}>
                        <Text style={styles.btnText}>Change Background</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default BackgroundChanger

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
    },
    btnContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    touhableBtn: {
        backgroundColor: "#0c73b8",
        height: 50,
        width: 200,
        borderRadius: 4,
        textAlign: "center",
        padding: 10,
        elevation: 4
    },
    btnText: {
        fontSize: 16,
        color: "#ffffff",
        textAlign: "center",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})