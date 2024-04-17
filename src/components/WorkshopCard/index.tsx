import { View, Text } from "react-native";
import { styles } from "./styles";
import { Icon } from "@rneui/themed";
import theme from "../../theme/global";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WorkshopProps } from "../../@types";
import { useTranslation } from "react-i18next";

export function WorkshopCard({ workshop }: { workshop: WorkshopProps }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Icon
        type="antdesign"
        name={"team"}
        color={theme.COLORS.YELLOW_500}
        size={48}
      />
      <View>
        <Text style={styles.title}>{workshop.name}</Text>
        <Text style={styles.description}>{workshop.shortDescription}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.details}>{t("details")}</Text>
        <Icon
          type="entypo"
          name={"newsletter"}
          color={theme.COLORS.GRAY_500}
          size={32}
        />
      </TouchableOpacity>
    </View>
  );
}
