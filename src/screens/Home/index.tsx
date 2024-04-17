import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { getWorkshops } from "../../services/workshopService";
import { AxiosError } from "axios";
import { AppError } from "../../utils/AppError";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "../../components/CustomInput";
import { Icon } from "@rneui/themed";
import theme from '../../theme/global'

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

  // useEffect(() => {
  //   fetchWorkshops();
  // }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputWrapper}>
          <CustomInput />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}>
              <Icon name={"search"} color={theme.COLORS.GRAY_500}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
