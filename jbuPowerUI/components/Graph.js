import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Colors from "../constants/colors";

//Props:
//textStyle, title, time_axis, data

const Graph = props => {
  return (
    <View>
      <View style={{flex: 1}}>
        <Text style={props.textStyle}>{props.title}</Text>
      </View>

      <View>
        <ScrollView horizontal={true}>
          <LineChart
            data={{
              labels: props.time_axis,
              datasets: [
                {data: props.solarData, color: (opacity = 1) => `rgba(235, 231, 12, ${opacity})`}, 
                {data: props.percent_clouds, color: (opacity = 1) => `rgba(212, 212, 212, ${opacity})`}, 
                {data: props.temp, color: (opacity = 1) => `rgba(230, 68, 14, ${opacity})`}
              ]
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