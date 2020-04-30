import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import {toggle_today} from "../store/actions/equivalent_power";
import {fetchSolar} from "../store/actions/solar";
import {toggle_lifetime} from "../store/actions/equivalent_power";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../constants/colors";

const Data = ({ children }) => <Text style={{ color: Colors.data }}>{children}</Text>

const EquivalentPower = (props) => {
  const toggle = useSelector((state) => state.toggle.energy_today);
  const solar = useSelector((state) => state.solar.allSolar);
  const dispatch = useDispatch();

  const loadSolar = useCallback(async () => {
    try {
      await dispatch(fetchSolar());      
    } catch (err) { }
  }, [dispatch]);

  useEffect(() => {
    loadSolar();
  }, [dispatch]);

  var iphone_charges;
  var houses;
  var money;
  var tesla_charges;
  var washing_machine_loads;
  var timeframe;

  if(toggle){
    iphone_charges = (solar[0].energy_today / 10.35).toFixed(2); //iPhone X battery is 10.35 Wh
    houses = (solar[0].energy_today / 28900).toFixed(2); //28.9 kWh used per day per house
    money = (solar[0].energy_today / 1000 * 0.1287).toFixed(2); //12.87 cents per kWh
    tesla_charges = (solar[0].energy_today / 100000).toFixed(2); //Model X has a 100kWh battery
    timeframe = "Today:"
  }
  else{
    iphone_charges = (solar[0].energy_lifetime / 10.35).toFixed(2);
    houses = (solar[0].energy_lifetime / 28900).toFixed(2); //28.9 kWh used per day per house
    money = (solar[0].energy_lifetime / 1000 * 0.1287).toFixed(2); //12.87 cents per kWh
    tesla_charges = (solar[0].energy_lifetime / 100000).toFixed(2); //Model X has a 100kWh battery
    timeframe = "Lifetime:"
  }
  return(
    <View style={styles.screen}>
      <View style={styles.button_group}>
        <Button
            style={styles.button}
            title="Today"
            onPress={() => dispatch(toggle_today())}
            color={Colors.primary}
        />
        <Button
          style={styles.button}
          title="Lifetime"
          onPress={() => dispatch(toggle_lifetime())}
          color={Colors.primary}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.header_text}>{timeframe}</Text>
      </View>

      <View style={styles.data}>
        <Text style={styles.text}>Money Generated: <Data>${money}</Data></Text>
        <Image 
          style={styles.image}
          source={require('../assets/money.png')}
        />
      </View>

      <View style={styles.data}>
        <Text style={styles.text}># of House Powered: <Data>{houses}</Data></Text>
        <Image 
          style={styles.image}
          source={require('../assets/house.png')}
        />
      </View>

      <View style={styles.data}>
        <Text style={styles.text}>Tesla Model X Charges: <Data>{tesla_charges}</Data></Text>
        <Image 
          style={styles.image}
          source={require('../assets/teslaX.png')}
        />
      </View>

      <View style={styles.data}>
        <Text style={styles.text}>iPhone X Charges: <Data>{iphone_charges}</Data></Text>
        <Image 
          style={styles.image}
          source={require('../assets/iPhoneX.png')}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button_group: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flex: 0.5,
  },
  button: {
    alignItems: "center",
    color: "white",
    padding: 10,
    fontFamily: "Roboto",
    fontSize: 24,
  },
  data: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"

  },
  image: {
    paddingTop: 10,
    height: 75,
    width: 75 
  },
  header: {
    flex: 0.33,
    justifyContent: "flex-start",
    padding: 15
  },
  header_text: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: Colors.primary,

  },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: Colors.primary
  },
});

export default EquivalentPower;