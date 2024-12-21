import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FlatCards from '../components/FlatCards';
import ElevatedCards from '../components/ElevatedCards';
import FancyCard from '../components/FancyCard';
import ActionCard from '../components/ActionCard';
import ContactList from '../components/ContactList';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <SafeAreaView>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />

        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
