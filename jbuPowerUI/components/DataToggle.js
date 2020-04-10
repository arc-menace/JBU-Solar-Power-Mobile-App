import React from "react";
import { View, Dimensions, Button } from "react-native";
import Colors from "../constants/colors";

const DataToggle = props => {
  return(
    <View style={{flexDirection: "row"}}>
      <View>
        <Button
          title="Solar"
          color={"#ffe600"}
          onPress={props.toggle_solar}
        />
      </View>
      <View>
        <Button
          title="% Clouds"
          color={"#787878"}
          onPress={props.toggle_clouds}
        />
      </View>
      <View>
        <Button
          title="Temperature"
          color={"#e6440e"}
          onPress={props.toggle_temp}
        />
      </View>
      <View>
        <Button
          title="Refresh"
          color={"#1d09b3"}
          onPress={props.refresh_data_i}
        />
      </View>
    </View>
  );
}

export default DataToggle;