import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const StartPage=()=>{
  return <Redirect href={"/Mail"}/>
}
export default StartPage;