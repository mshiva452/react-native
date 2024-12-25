import React from 'react'
import { StyleSheet, useWindowDimensions, View, SafeAreaView, ScrollView, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PasswordGenerator from '../components/PasswordGenerator'
import BackgroundChanger from '../components/BackgroundChanger';
import RollDice from '../components/RollDice';
import CurrencyConverter from '../components/CurrencyConverter';
import TicTacTao from '../components/TicTacTao';

const routes = [
    { key: 'passwordGenerator', title: 'Password Generator' },
    { key: 'backgroundColor', title: 'Background Changer' },
    { key: 'rollDice', title: 'Roll Dice' },
    { key: 'currency', title: "Currency Converter" },
    { key: 'tictactao', title: "TicTacTao Game" },
];
const Settings = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    return (
        <SafeAreaView style={{ flexShrink: 1 }}>
            <View style={{ height: "100%" }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={
                        SceneMap({
                            passwordGenerator: PasswordGenerator,
                            backgroundColor: BackgroundChanger,
                            rollDice: RollDice,
                            currency: CurrencyConverter,
                            tictactao: TicTacTao
                        })
                    }
                    overScrollMode="always"
                    renderTabBar={props => (
                        <TabBar scrollEnabled={true} {...props} indicatorContainerStyle={{ backgroundColor: "#064e78" }} indicatorStyle={{ backgroundColor: "#be162c" }} />
                    )}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({})