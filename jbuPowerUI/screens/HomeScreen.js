import React, { useEffect, useCallback, useState } from "react";
import { 
  StyleSheet,
  View,
  Text,
  FlatList,
  RefreshControl, } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//import Graph from "../components/Graph";
import {fetchSolar} from "../store/actions/solar";


const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const solar = useSelector((state) => state.solar.allSolar);
  const dispatch = useDispatch();

  const loadSolar = useCallback(async () => {
    
    setIsLoading(true);
    try {
      await dispatch(fetchSolar()); 
      
    } catch (err) {

    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    loadSolar();
    console.log("ran loadSolar");
    console.log(solar);
  }, [dispatch]);
  console.log("Hello There!");
  const renderItemHandler = ({ item }) => {
    return (
      <View>
        <Text>{item.current_power}</Text>  
      </View>
    );
  };
  return (
    <View>
    <Text>There should be text below this</Text>
    <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={loadSolar} />
        }
        style={{color:"#000000"}}
        //keyExtractor={(item, index) => item[index].time.toString()}
        data={solar}
        renderItem={renderItemHandler}
      />
    
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