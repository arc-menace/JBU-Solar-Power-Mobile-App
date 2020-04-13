import React from "react";
import { View, Button } from "react-native";

const Refresh = props => {
  return(
    <View style={{flexDirection: "row"}}>
      <View>
        <Button
          borderRadius={10}
          title="Refresh"
          color={"#1d09b3"}
          onPress={props.refresh_data_i}
        />
      </View>
    </View>
  );
}

export default Refresh;     