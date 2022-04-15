import React, { useState } from 'react';
import { Text } from "react-native";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true); 
  const startLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await Font.loadAsync(Ionicons.font)
    await Asset.loadAsync(require('./profil-01.jpg'))
    await Image.prefetch('https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80')
  };

  if (!ready){
    return (
      <AppLoading 
        startAsync={startLoading}
        onFinish={onFinish} 
        onError={console.error}
      />
    );
  }
  return (
    <Text>We are done loading</Text>
  );
}
