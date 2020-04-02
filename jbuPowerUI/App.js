import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

import Header from "./components/Header";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.screen}>
      <Header title="JBU Solar Power" />
      <Text style={styles.text}>Joseph Hahn</Text>
      <Text style={styles.text}>Not much here yet, so play with this switch</Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: 'white'
  },
  switch: {
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 600
  }
});