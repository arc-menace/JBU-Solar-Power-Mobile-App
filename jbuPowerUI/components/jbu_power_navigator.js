import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item, HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import EquivalentPower from "../screens/EquivalentPower";


const HomeStack = createStackNavigator();
const EquivalentPowerStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomHeaderButton = (props) => {
  return(
    <HeaderButton 
      {...props} 
      IconComponent={Ionicons} i
      conSize={25} 
      color={Platform.OS === 'android' ? 'white' : 'black'} 
    />
  );
};

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
  },
  headerTitleStyle: {
    fontSize: 28,
    fontFamily: "Roboto"
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
  headerTitle: "JBU Solar",
};

const HomeStackNavigator = () => {
  return(
    <HomeStack.Navigator
      screenOptions={({navigation, route}) => ({
        ...defaultStackNavOptions,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Menu"
              iconName={Platform.OS === "ios" ? "ios-more" : "md-more"}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        )
      })}>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
    </HomeStack.Navigator>
  );
}

const EquivalentPowerNavigator = () => {
  return(
    <EquivalentPowerStack.Navigator
      screenOptions={({navigation, route}) => ({
        ...defaultStackNavOptions,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Menu"
              iconName="md-more"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        )
    })}>
      <EquivalentPowerStack.Screen name="EquivalentPower" component={EquivalentPower}/>
    </EquivalentPowerStack.Navigator>
  );
}

const JBUNavigator = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackNavigator}/>
        <Drawer.Screen name="Equivalent Power" component={EquivalentPowerNavigator}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default JBUNavigator;