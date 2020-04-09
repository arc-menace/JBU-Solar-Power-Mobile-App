import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Switch, Dimensions, Button, Alert } from 'react-native';
import Header from "./components/Header";
import Colors from "./constants/colors";
import Graph from "./components/Graph"


export default function App() {
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
  
  const randomDataB = [
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
  ];
  const randomDataC = [
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
  ];

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

  function set_time_axis(){
    var i_time_axis = [];
    for(var i = 1; i <=12; i++){
      var time = new Date().getHours() + 1 - i;
      if(time >= 12){
        if(time > 12){
          time -= 12;
        }
        time.toString();
        time += ":00 PM";
      }
      if(time < 12 && time >= 0){
        if(time == 0){
          time = 12;
        }
        time.toString();
        time += ":00 AM";
      }
      if(time < 0){
        time += 12;
        time.toString();
        time += ":00 PM";
      }
      i_time_axis.push(time);
    }
    return i_time_axis.reverse();
  }

  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <Header title="JBU Solar Power" />
      </View>

      <View style = {styles.button}>
        <Button
          title="Refresh"
          color={Colors.primary}
          onPress={refresh_data}
        />
      </View>

      <View style = {styles.graph}>
        <Graph 
          solarData={randomData} 
          percent_clouds={randomDataB} 
          temp={randomDataC} 
          time_axis={set_time_axis()} 
          textStyle={styles.text} 
          title={"Graph Title"}/>
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