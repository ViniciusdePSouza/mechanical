import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function DefineLanguage() {
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate("HomeStack" as never);
  }

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity style={{padding: 8, backgroundColor: 'yellow'}} onPress={handleNavigation}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
