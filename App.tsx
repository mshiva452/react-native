import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './navigation/TabNavigator';
import { StyleSheet, View, useColorScheme } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import PasswordGenerator from './Screens/PasswordGenerator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Contact from './Screens/Contact';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => (<Icon name="home" color={color} size={26} />) }} />
          <Tab.Screen name="Contact" component={Contact} options={{ tabBarIcon: ({ color }) => (<Icon name="person" color={color} size={26} />) }} />
          <Tab.Screen name="PasswordGenerator" component={PasswordGenerator} options={{ title: 'Password Generator', tabBarIcon: ({ color }) => (<Icon name="settings" color={color} size={26} />) }} />
        </Tab.Navigator>
      </NavigationContainer>
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
