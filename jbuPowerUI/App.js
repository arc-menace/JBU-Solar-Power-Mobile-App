import * as React from 'react';
import { useState } from "react";
import { AppLoading } from "expo"
import * as Font from "expo-font"
import { Provider } from "react-redux";

import JBUNavigator from "./components/jbu_power_navigator";
import {store} from './store/store';

const fetchData = () => { //Load Fonts Asynchronously
  return Font.loadAsync({
    Roboto: require("./assets/fonts/roboto.ttf")
  });
}

export default function App() {  
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){ //Wait for fonts to load
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log("error with font loading")}
      />
    );
  }

  return (
    <Provider store={store}>
      <JBUNavigator/>
    </Provider>
  );
}
