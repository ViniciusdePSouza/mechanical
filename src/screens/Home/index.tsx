import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export function Home() {
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate("Details" as never);
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity  style={{padding: 8, backgroundColor: 'yellow'}} onPress={handleNavigation}>
        <Text>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
}
