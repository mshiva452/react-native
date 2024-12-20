import React from 'react'
import { FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Item from './Item';
import { DATA } from '../data/data';
import { View } from 'react-native';
import { Text } from 'react-native';
const FlatCards = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headingText}>Flat Cards</Text>
            </View>
            <FlatList
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={DATA}
                renderItem={data => <Item title={data.item.title} />}
            />
        </SafeAreaView>
    )
}

export default FlatCards;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        marginTop: StatusBar.currentHeight || 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        margin: 5
    },

});