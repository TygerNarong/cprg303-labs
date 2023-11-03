

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button
} from 'react-native';
import ToDoList from './assets/ToDoList';
import ToDoForm from './assets/ToDoForm';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList />
      <ToDoForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
