import React from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = props => {
  const solar = useSelector(state => state.solar.allSolar);
  const renderItemHandler = itemData => {
    return(
      <View style={styles.listItem}>
        <Text>{itemData.item.current_power}</Text>
      </View>
    );
  }
  return(
    <View>
      <View style={styles.screen}>
        <FlatList
          data={solar}
          renderItem={renderItemHandler}
          keyExtractor={(item, index) => item.time.toString()}
        />      
        <Text>HomeScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;