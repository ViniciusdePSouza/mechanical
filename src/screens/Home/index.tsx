import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { getWorkshops } from "../../services/workshopService";
import axios, { AxiosError } from "axios";
import { AppError } from "../../utils/AppError";

export function Home() {
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate("Details" as never);
  }

  async function fetchWorkshops() {
    try {
      const response = await getWorkshops();

      return response;
    } catch (error) {
      const isAppError = error instanceof AppError;
      const isAxiosError = error instanceof AxiosError;
      var title = "";
      if (isAppError) {
        title = error.message;
      } else if (isAxiosError) {
        title = error.message;
      } else {
        title = "Unexpected error occurred";
      }

      Alert.alert(title);
    }
  }

  useEffect(() => {
    fetchWorkshops();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{ padding: 8, backgroundColor: "yellow" }}
        onPress={handleNavigation}
      >
        <Text>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
}
