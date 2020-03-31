import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="JBU Solar Power" />
      <Text style={styles.text}>Joseph Hahn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: 'white'
  }
});