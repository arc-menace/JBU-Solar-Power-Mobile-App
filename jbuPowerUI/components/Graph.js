import React, { useState } from "react";
import { View, Dimensions, Text, Platform } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Colors from "../constants/colors";
import Refresh from "./Refresh";

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

  var vertical_rotate = 0;
  var font_size = "11";
  if(Platform.OS == "android" || Platform.OS == "ios"){
    vertical_rotate = -30;
    
    font_size = "10";
  }

  return (
    <View>
      <View>
        <Refresh
          refresh_data_i = {refresh_data}
        />
      </View>
      <View>
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
            width={Dimensions.get("window").width - 10} // from react-native
            height={300}
            yAxisSuffix="kWh"
            yAxisInterval={1} // optional, defaults to 1
            fromZero={true}
            verticalLabelRotation = {vertical_rotate}
            chartConfig={{
              backgroundGradientFrom: Colors.primary,
              backgroundColor: Colors.primary,
              backgroundGradientTo: Colors.primary,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: Colors.secondary
              },
              propsForLabels: {
                fontSize: font_size,
              }
            }}
            bezier 
            style={{
              marginVertical: 5,
              borderRadius: 2
            }}
          />
      </View>      
    </View>
  );
}

export default Graph;