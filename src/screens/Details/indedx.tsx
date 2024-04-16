import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export function Details() {
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate("Home" as never);
  }
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
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
}
