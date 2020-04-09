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
              datasets: [{ data: props.solarData }, {data: props.percent_clouds}, {data: props.temp}]
            }}
            width={1300} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="kWh"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10
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
        </ScrollView>
      </View>      
    </View>
  );
}

export default Graph;