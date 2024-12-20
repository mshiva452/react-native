import { Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

    const openWebsite = (webLink: string) => {
        Linking.openURL(webLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatdcard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in React Native 0.71
                    </Text>
                </View>
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2022/03/04/07/38/question-mark-7046730_1280.jpg' }} style={styles.cardImage} />
                <View style={styles.cardBodyContainer}>
                    <Text numberOfLines={2} style={styles.cardBodyContent}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati aperiam quibusdam, ab vero, asperiores sit placeat veritatis harum in odit nemo delectus eligendi recusandae corporis. Cupiditate earum laboriosam nostrum rem?
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://google.com')} >
                        <Text style={styles.footerLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://google.com')} >
                        <Text style={styles.footerLinks}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default ActionCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8

    },
    card: {
        width: "auto",
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatdcard: {
        backgroundColor: "#4885cf",
        elevation: 3,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    headingContainer: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
    },
    cardImage: {
        height: 190
    },
    cardBodyContainer: {
        padding: 10,
    },
    cardBodyContent: {
        color: "#fff",
        fontSize: 14,
        lineHeight: 18
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    footerLinks: {
        fontSize: 16,
        color: "#000",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 4
    }
})