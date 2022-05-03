import * as React from 'react';
import { View, Text, Image } from "react-native";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator(); 

function HomeScreen() {
  return (
    <View style={{ flex:1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{ flex:1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting!</Text>
    </View>
  );
}

export default function App() {  
  const [assets] = useAssets([require("./profil-01.jpg")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  
  if (!assets || !loaded){
    return (
      <AppLoading />
    );
  }
  return (    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
