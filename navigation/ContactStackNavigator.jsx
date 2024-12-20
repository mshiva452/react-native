import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Contact from '../Screens/Contact';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};
