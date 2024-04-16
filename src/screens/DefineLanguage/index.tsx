import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { CustomButton } from "../../components/CustomButton";
import "../../utils/languages/i18n";
import { useTranslation } from "react-i18next";

export function DefineLanguage() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  function changeLanguage(value: string) {
    i18n.changeLanguage(value);
  }

  function handleNavigation() {
    navigation.navigate("HomeStack" as never);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("chooseYourLanguageTitle")}</Text>
      <View style={styles.buttonWrapper}>
          <CustomButton
            title={"Português"}
            onPressFunction={changeLanguage}
            language={"pt"}
            variant={"SECONDARY"}
          />
          <CustomButton
            title={"English"}
            onPressFunction={changeLanguage}
            language={"en"}
            variant={"SECONDARY"}
          />
        </View>

        <View style={[styles.buttonWrapper, { marginTop: -80 }]}>
          <CustomButton
            title={"Español"}
            onPressFunction={changeLanguage}
            language={"es"}
            variant={"SECONDARY"}
          />
          <CustomButton
            title={"Français"}
            onPressFunction={changeLanguage}
            language={"fr"}
            variant={"SECONDARY"}
          />
        </View>
     
      <View style={{ width: "100%", marginTop: 120 }}>
        <CustomButton
          title={"Continuar"}
          onPressFunction={handleNavigation}
          variant={"PRIMARY"}
        />
      </View>
    </View>
  );
}
