import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

import Header from "./components/Header";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <Header title="JBU Solar Power" />
      </View>

      <View style={{flex: 2}}>
        <Text style={styles.text}>Joseph Hahn</Text>
        <Text style={styles.text}>Not much here yet, but you can play with this switch</Text>
      </View>

      <View style={{flex: 5}}>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f5dd4b"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    backgroundColor: 'white'
  },
  switch: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 400
  },
  header: {
    flex: 1,
  }
});