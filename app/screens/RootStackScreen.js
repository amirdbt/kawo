import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SigninScreen from "./SigninScreen";
import SignupScreen from "./SignupScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SigninScreen" component={SigninScreen} />
      <RootStack.Screen name="SignupScreen" component={SignupScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;

const styles = StyleSheet.create({});
