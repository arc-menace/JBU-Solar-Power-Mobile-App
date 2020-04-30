import React, {useCallback, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, SafeAreaView } from "react-native";

import {fetchSolar} from "../store/actions/solar";
import {fetchWeather} from "../store/actions/weather";

import Graph from "../components/Graph";
import InfoWidget from "../components/InfoWidget";

const HomeScreen = () => {
  const solar = useSelector((state) => state.solar.allSolar);
  const weather = useSelector((state) => state.weather.allWeather);

  const dispatch = useDispatch();

  const loadSolar = useCallback(async () => {
    try {
      await dispatch(fetchSolar());      
    } catch (err) { }
  }, [dispatch]);

  const loadWeather = useCallback(async () => {
    try {
      await dispatch(fetchWeather());
    } catch(err) { }
  }, [dispatch]);

  useEffect(() => {
    loadSolar();
    loadWeather();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.info}>
        <InfoWidget weather={weather} solar={solar}/>
      </View>
      <View style={styles.graph}>
        <Graph solar={solar}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  info: {
    flex: 2,
  },
  graph: {
    flex: 3,
  }
});

export default HomeScreen;