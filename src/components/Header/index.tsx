import { HeaderProps } from "../../@types";

import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import theme from "../../theme/global";

import { Icon } from "@rneui/themed";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export function Header({title}: HeaderProps) {
  const navigation = useNavigation();
  const { t } = useTranslation();
  function handleNavigation() {
    navigation.goBack();
  }
  return (
    <View style={styles.appBar}>
      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Icon
          type="entypo"
          name="back"
          size={32}
          color={theme.COLORS.GRAY_200}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{t(`${title}`)}</Text>
    </View>
  );
}
