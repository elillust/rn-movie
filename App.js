import React, { useState } from 'react';
import { Text, Image } from "react-native";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';

export default function App() {  
  const [assets] = useAssets([require("./profil-01.jpg")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  
  if (!assets || !loaded){
    return (
      <AppLoading />
    );
  }
  return (
    <Text>We are dddcccc done loading Test</Text>
  );
}
