import React, {useCallback, useEffect} from "react";
import { View, Dimensions, Platform, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LineChart } from "react-native-chart-kit";
import Colors from "../constants/colors";
import {fetchSolar} from "../store/actions/solar";
import { store } from "../store/store";

const Graph = () => {
  const dispatch = useDispatch();
  const solar = useSelector((state) => state.solarReducer.allSolar);
  
  const loadSolar = useCallback(async () => {
    try{
      await dispatch(fetchSolar());
    } catch (err) {} 
    
  }, [dispatch])

  useEffect(() => {
    loadSolar();
  }, [dispatch])

  let solarData = [];
  for(var i = 0; i < 48; i++){
    solarData.push(solar[i].current_power);
  }
  solarData.reverse();

  function updateSolar(){
    for(var i = 0; i < 48; i++){
      solarData.push(solar[i].current_power);
    }
    solarData.reverse();
  }

  var vertical_rotate = 0;
  var font_size = "10";
  var screen_border = Math.floor(Dimensions.get("window").width * 0.1);

  if(Platform.OS === 'android' || Platform.OS === 'ios'){
    screen_border = 10;
  }

  return (
    <View>
      <View>
        <LineChart
          data={{
            labels: set_time_axis(),
            datasets: [
              { data: solarData, color: (opacity = 1) => `rgba(235, 231, 12, ${opacity})` }
            ],
            legend: ["Solar [Wh]"]
          }}
          width={Dimensions.get("window").width - screen_border} // from react-native
          height={300}
          yAxisSuffix="Wh"
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
              fontFamily: "roboto"
            }
          }}
          bezier
          style={{
            marginVertical: 5,
            borderRadius: 2
          }}
        />
      </View>
      <View>
        <Text>{solarData[solarData.length - 1]}</Text>
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