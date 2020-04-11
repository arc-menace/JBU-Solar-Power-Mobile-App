import React, { useState } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Colors from "../constants/colors";
import Refresh from "./Refresh"

//Props:
//textStyle, title, time_axis, data
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

const Graph = props => {
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



  return (
    <View>
      <View>
        <Refresh
          refresh_data_i = {refresh_data}
        />
      </View>
      <View>
        <ScrollView horizontal={true}>
          <LineChart
            data={{
              labels: set_time_axis(),
              datasets: [
                {data: randomData, color: (opacity = 1) => `rgba(235, 231, 12, ${opacity})`}, 
                {data: randomDataB, color: (opacity = 1) => `rgba(212, 212, 212, ${opacity})`}, 
                {data: randomDataC, color: (opacity = 1) => `rgba(230, 68, 14, ${opacity})`}
              ],
              legend: ["Solar [kWh]", "% Clouds", "Temperature [K]"]
            }}
            width={Math.floor(Dimensions.get("window").width * 0.9)} // from react-native
            height={300}
            yAxisLabel=""
            yAxisSuffix="kWh"
            yAxisInterval={1} // optional, defaults to 1
            fromZero={true}
            chartConfig={{
              backgroundGradientFrom: Colors.primary,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10
              },
              propsForDots: {
                r: "8",
                strokeWidth: "2",
                stroke: Colors.secondary
              }
            }}
            bezier 
            style={{
              marginVertical: 8,
              borderRadius: 6
            }}
          />
        </ScrollView>
      </View>      
    </View>
  );
}

export default Graph;