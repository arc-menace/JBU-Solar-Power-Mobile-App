import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Button, Alert } from 'react-native';
import Header from "./components/Header";
import Graph from "./components/Graph";
import * as Font from "expo-font";
import {AppLoading} from "expo";


const fetchData = () => {
  return Font.loadAsync({
    roboto: require("./assets/fonts/roboto.ttf")
  });
}

export default function App() {  
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <Header title="JBU Solar Power"/>
      </View>
      
      <View style = {styles.graph}>
        <Graph />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    backgroundColor: 'white',
    fontFamily: 'roboto'
  },
  switch: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 100
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1
  },
  header: {
    flex: 1,
  },
  graph: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});