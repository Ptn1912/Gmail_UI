import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:Colors.primary, tabBarLabelStyle: { fontSize: 15 },}} >
      <Tabs.Screen
        name="Mail"
        options={{
          tabBarLabel: "メール",
          tabBarIcon: ({ color }) => <Ionicons name="mail" size={26} color={color}/>,
        }}
      />
      <Tabs.Screen
       name="Meet"
       options={{
        tabBarLabel: "Meet",
        tabBarIcon: ({ color }) => <FontAwesome5 name="video" size={26}color={color} />,
      }}
        />
    </Tabs>
  );
};
export default TabLayout;
