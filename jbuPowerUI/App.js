import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Button, Alert } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import Header from "./components/Header";
import Colors from "./constants/colors";
import Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchData = () => {
  return Font.loadAsync({
    robosto: require('./assets/fonts/Roboto-Regular.ttf')
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){
    return(
      <AppLoading 
        startAsync = { fetchData } 
        onFinish = { () => setDataLoaded(true)} 
        onError = { err => console.log(err)}
      />
    );
  }
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [randomData, setRandomData] = useState([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100                
  ]);

  function refresh_data(){
    setRandomData([
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100                
    ])
  }

  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <Header title="JBU Solar Power" />
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.text}>Joseph Hahn</Text>
        <Text style={styles.text}>Not much here yet, but you can play with this switch</Text>
      </View>

      <View style={{flex: 1}}>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f5dd4b"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style = {styles.button}>
        <Button
          title="Refresh"
          color={Colors.primary}
          onPress={refresh_data}
        />
      </View>
      
      <View style = {styles.graph}>

        <View style = {{flex: 1}}>
          <Text style = {styles.text}>Bezier Line Chart</Text>
        </View>

        <View style={{flex: 2}}>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [{ data: randomData }]
            }}
            width={Math.floor(Dimensions.get("window").width * 0.9)} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>

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