import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text } from 'react-native';

import { AppLoading } from "expo"
import * as Font from "expo-font"

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import solarReducer from "./store/reducers/solar";

import JBUNavigator from "./components/jbu_power_navigator";

const rootSolarReducer = combineReducers({
  solar: solarReducer,
});

const dataStore = createStore(rootSolarReducer);

const fetchData = () => {
  return Font.loadAsync({
    'roboto': require("./assets/fonts/roboto.ttf")
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
    <Provider store={dataStore}>
      <JBUNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});