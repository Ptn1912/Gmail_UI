import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import Mail from '../(tabs)/Mail'
import Meet from '../(tabs)/Meet'

const Tab = createBottomTabNavigator();

const TabLayout = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:Colors.primary}}>
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarLabel: "メール",
          tabBarIcon: ({ color }) => <Ionicons name="mail" size={26} color={color}/>,
        }}
      />
      <Tab.Screen
       name="Meet"
       component={Meet}
       options={{
        tabBarLabel: "Meet",
        tabBarIcon: ({ color }) => <FontAwesome5 name="video" size={26}color={color} />,
      }}
        />
    </Tab.Navigator>
  );
};
export default TabLayout;
