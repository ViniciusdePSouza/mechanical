import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type AppRoutesProps = {
  Home: undefined;
  IndicateFriend: undefined;
  Details: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;
