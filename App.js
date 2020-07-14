// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./app/screens/MainTabScreen";
import DrawerContent from "./app/screens/DrawerContent";
import BookmarkScreen from "./app/screens/BookmarkScreen";
import SettingsScreen from "./app/screens/SettingsScreen";
import SupportScreen from "./app/screens/SupportScreen";
import RootStackScreen from "./app/screens/RootStackScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
