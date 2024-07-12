import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Mail/Header";
import Mail_Item from "@/components/Mail/Mail_Item";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import FloatButton from "@/components/Mail/FloatButton";

const Mail = () => {
  return (
    <GestureHandlerRootView style={{backgroundColor:'white',height:'100%'}} >
      <ScrollView>
        <Header />
        <Mail_Item />
      </ScrollView>
      <FloatButton/>
    </GestureHandlerRootView>
  );
};

export default Mail;
