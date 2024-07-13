import React from "react";
import { View, Text } from "react-native";
import Header from "@/components/Mail/Header";
import Mail_Item from "../../components/Mail/Mail_Item";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import FloatButton from "../..//components/Mail/FloatButton";

const Mail = () => {
  return (
      <GestureHandlerRootView>
      <Header />
      <Mail_Item />
      <FloatButton />
      </GestureHandlerRootView>
   
  );
};

export default Mail;
