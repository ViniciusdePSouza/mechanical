import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutesProps } from "../@types";

import theme from "../theme/global";
import { Platform } from "react-native";
import { Home } from "../screens/Home";
import { Icon } from "@rneui/themed";
import { IndicateFriend } from "../screens/IndicateFriend";
import { DefineLanguage } from "../screens/DefineLanguage";
import { Details } from "../screens/Details/indedx";

const Tab = createBottomTabNavigator<AppRoutesProps>();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.YELLOW_700,
        tabBarInactiveTintColor: theme.COLORS.GRAY_300,
        tabBarStyle: {
          backgroundColor: theme.COLORS.GRAY_600,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 62 : 84,
          paddingTop: Platform.OS === "android" ? 8 : 16,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
        <Tab.Screen
         name="Home"
         component={Home}
         options={{
           tabBarIcon: ({ color }) => {
             return <Icon name="home" size={36} color={color} />;
           },
         }}
        />
        <Tab.Screen
         name="IndicateFriend"
         component={IndicateFriend}
         options={{
           tabBarIcon: ({ color }) => {
             return <Icon type="entypo" name="add-user" size={36} color={color} />;
           },
         }}
        />
    </Tab.Navigator>
  );
};

export function AppRoutes() {
    return (
      <Stack.Navigator initialRouteName="DefineLanguage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="DefineLanguage" component={DefineLanguage} />
        <Stack.Screen name="HomeStack" component={MainTabs} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    );
  }
