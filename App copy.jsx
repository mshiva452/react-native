import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import NPSScreen from './Screens/NPSScreen';
import PFScreen from './Screens/PFScreen';
import MFScreen from './Screens/MFScreen';
import {MainStackNavigator} from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Profile"
        component={TabNav}
        options={{
          title: 'Expense',
          drawerIcon: ({color}) => (
            <Icon name="money" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="NPS"
        component={NPSScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="payments" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => <Icon name="apps" color={color} size={26} />,
        }}
      />
      <Drawer.Screen
        name="PF"
        component={PFScreen}
        options={{
          drawerIcon(props) {
            return <Icon name="savings" {...props} />;
          },
        }}
      />
      <Drawer.Screen
        name="MF"
        component={MFScreen}
        options={{
          drawerIcon(props) {
            return <Icon name="equalizer" {...props} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const TabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Expense',
            tabBarIcon: ({color}) => (
              <Icon name="money" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="NPS"
          component={NPSScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="payments" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="apps" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="PF"
          component={PFScreen}
          options={{
            tabBarIcon(props) {
              return <Icon name="savings" {...props} />;
            },
          }}
        />
        <Tab.Screen
          name="MF"
          component={MFScreen}
          options={{
            tabBarIcon(props) {
              return <Icon name="equalizer" {...props} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
