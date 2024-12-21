import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ContactList from '../components/ContactList';

const Contact = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <SafeAreaView>
          <ContactList />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Contact;

const styles = StyleSheet.create({});
