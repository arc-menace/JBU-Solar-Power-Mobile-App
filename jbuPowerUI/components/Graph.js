import React from "react";
import { View, Dimensions, Platform, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Colors from "../constants/colors";


const Data = ({ children }) => <Text style={{ color: Colors.data }}>{children}</Text>

const Graph = (props) => {
  var as_of_hours = props.solar[0].time.substring(11, 13);
  as_of_hours -= 5;
  var is_morning = "AM";
  if(as_of_hours > 12){
    as_of_hours -= 12;
    is_morning = "PM";
  }
  var as_of_minutes = props.solar[0].time.substring(14, 16);
  var date_day = props.solar[0].time.substring(8, 10);
  var date_month = props.solar[0].time.substring(5, 7);
  if(as_of_hours <= 0){
    as_of_hours += 12;
    is_morning = "PM";
    date_day -= 1;
  }
  if(date_month[0] == "0"){
    date_month = date_month[1];
  }
  var date_year = props.solar[0].time.substring(0, 4);

  let solarData = [];
  var minutes = props.solar[0].time.substring(14,16);
  var offset = 0;
  if(minutes == "15"){
    offset = 1;
  }
  if(minutes = "30"){
    offset = 2;
  }
  if(minutes = "45"){
    offset = 3;
  }
  for(var i = 0; i < 45 + offset; i++){
    solarData.push(props.solar[i].current_power);
  }
  solarData.reverse();

  var vertical_rotate = 0;
  var font_size = "10";
  var screen_border = Math.floor(Dimensions.get("window").width * 0.1);

  if(Platform.OS === 'android' || Platform.OS === 'ios'){
    screen_border = 10;
    vertical_rotate = 45;
  }

  return (
    <View>
      <View>
      <Text style={{fontFamily: "Roboto", fontSize: 14, color: Colors.primary}}>Data Current as of: <Data>{as_of_hours}:{as_of_minutes} {is_morning}, {date_month}/{date_day} {date_year}</Data></Text>
      </View>
      <View>
        <LineChart
          data={{
            labels: set_time_axis(),
            datasets: [
              { data: solarData, color: (opacity = 1) => `rgba(235, 231, 12, ${opacity})` }
            ],
            legend: ["Solar [W]"]
          }}
          width={Dimensions.get("window").width - screen_border} // from react-native
          height={300}
          yAxisSuffix="W"
          yAxisInterval={1} // optional, defaults to 1
          fromZero={true}
          verticalLabelRotation={vertical_rotate}
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
              fontFamily: "Roboto"
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

export default Graph;