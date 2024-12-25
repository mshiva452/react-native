import React, { useState } from 'react'
import type { PropsWithChildren } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import dice1 from "../assets/images/1.png"
import dice2 from "../assets/images/2.png"
import dice3 from "../assets/images/3.png"
import dice4 from "../assets/images/4.png"
import dice5 from "../assets/images/5.png"
import dice6 from "../assets/images/6.png"

type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
    return <Image style={styles.diceImage} source={imageUrl} />
}
const RollDice = () => {
    const [dice, setDice] = useState<ImageSourcePropType>(dice1)
    const roll = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        switch (randomNumber) {
            case 1:
                setDice(dice1)
                break;
            case 2:
                setDice(dice2)
                break;
            case 3:
                setDice(dice3)
                break;
            case 4:
                setDice(dice4)
                break;
            case 5:
                setDice(dice5)
            default:
                setDice(dice6)
                break;
        }
        ReactNativeHapticFeedback.trigger("impactLight", options);
    }
    return (
        <View style={styles.container}>
            <Dice imageUrl={dice} />
            {/*  <View style={styles.diceContainer}>
                <Text style={styles.dice}>{dice}</Text> 

            </View> */}
            <TouchableOpacity onPress={roll} style={styles.diceBtn}>
                <Text style={styles.diceBtnText}>ROLL THE DICE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RollDice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 25,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    diceContainer: {
        width: 200,
        height: 200,
        borderRadius: 10,
        backgroundColor: '#069165',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dice: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff"
    },
    diceBtn: {
        width: 150,
        height: 50,
        borderRadius: 4,
        backgroundColor: '#0c5fc5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    diceBtnText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    },
    diceImage: {
        width: 200,
        height: 200
    }
})