import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {useFonts} from "expo-font"
const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
<Stack.Screen name="(tabs)"></Stack.Screen>
        </Stack>
  )
}

export default RootLayout;

