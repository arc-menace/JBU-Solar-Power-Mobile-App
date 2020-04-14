import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import solarReducer from "./store/reducers/solar";


const rootSolarReducer = combineReducers({
  solar: solarReducer,
});

const dataStore = createStore(rootSolarReducer);

export default function App() {  
  return (
    <Provider store={dataStore}>
      <HomeScreen/>
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