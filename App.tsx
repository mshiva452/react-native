import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './navigation/TabNavigator';
import { StyleSheet, View, useColorScheme } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Contact from './Screens/Contact';
import Settings from './Screens/Settings';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => (<Icon name="home" color={color} size={26} />) }} />
          <Tab.Screen name="Apps" component={Settings} options={{ title: 'Apps', tabBarIcon: ({ color }) => (<Icon name="apps" color={color} size={26} />) }} />
          <Tab.Screen name="Contact" component={Contact} options={{ tabBarIcon: ({ color }) => (<Icon name="person" color={color} size={26} />) }} />
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
