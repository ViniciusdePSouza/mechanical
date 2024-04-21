import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { IsLoadingConfigProvider } from "./src/hooks/isLoadingContext";

export default function App() {
  return (
    <IsLoadingConfigProvider>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Routes />
    </IsLoadingConfigProvider>
  );
}
