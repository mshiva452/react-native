import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import {StyleSheet, View, useColorScheme} from 'react-native';
import HomeScreen from './Screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  darkText: {
    color: 'dark',
  },
  whiteText: {
    color: 'white',
  },
});
export default App;
