import React from "react";
import { Stack } from "expo-router";

const RootLayout =()=> {

  return(

<Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="index"/>
    <Stack.Screen name="about"/>
    <Stack.Screen name="profile"/>
    </Stack>
  )
}
export default  RootLayout;