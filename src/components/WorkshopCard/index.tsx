import { WorkshopProps } from "../../@types";

import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
import theme from "../../theme/global";

import { useTranslation } from "react-i18next";

import { Icon } from "@rneui/themed";

export function WorkshopCard({ workshop }: { workshop: WorkshopProps }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={{ width: 90, height: 50}}>
        <Image
          source={{ uri: `data:image/png;base64,${workshop.Foto}` }}
          style={{ width: "100%", height: "100%", resizeMode: "contain", borderRadius: 8 }}
        />
      </View>

      <View style={{ flex: 1, alignContent: "flex-start" }}>
        <Text style={styles.title}>{workshop.Nome}</Text>

        <Text style={styles.description}>
          {workshop.DescricaoCurta.length > 30
            ? `${workshop.DescricaoCurta.substring(0, 30)}...`
            : workshop.DescricaoCurta}
        </Text>
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
