import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";


const Data = ({ children }) => <Text style={{ color: Colors.data }}>{children}</Text>

const InfoWidget = (props) => {
  return (
    <View style={styles.infoWidget}>
      <Text style={styles.text}>Current Power: <Data>{props.solar[0].current_power} W</Data></Text>
      <Text style={styles.text}>Energy Today: <Data>{(props.solar[0].energy_today / 1000).toFixed(2)} kWh</Data></Text>
      <Text style={styles.text}>Lifetime Energy: <Data>{(props.solar[0].energy_lifetime / 1000000).toFixed(2)} MWh</Data> </Text>
      <Text style={styles.text}>Current Weather: <Data>{props.weather[0].description}</Data></Text>
      <Text style={styles.text}>Current Temperature: <Data>{Math.floor((props.weather[0].temp - 273) * (9/5) + 32)}{'\u00b0'}F</Data></Text>
      <Text style={styles.text}>% Clouds: <Data>{props.weather[0].clouds}%</Data></Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoWidget: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "bold"
  }
});

export default InfoWidget;