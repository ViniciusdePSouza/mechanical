import { DetailsProps, WorkshopProps } from "../../@types";

import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";
import theme from "../../theme/global";

import { Icon } from "@rneui/themed";
import { useTranslation } from "react-i18next";

import { ProfileDetailsView } from "../../components/ProfileDetailsView";

export function Details() {
  const [details, setDetails] = useState<WorkshopProps | undefined>(undefined);

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as DetailsProps;

  const { t } = useTranslation();

  function handleNavigation() {
    navigation.goBack();
  }

  useEffect(() => {
    if (params["workshop"] && params != undefined) {
      setDetails(params["workshop"]);
    }
  }, [details]);
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_400 }}>
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Icon
            type="entypo"
            name="back"
            size={32}
            color={theme.COLORS.GRAY_200}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{t("details")}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <View style={styles.banner}>
            <Image
              source={{ uri: `data:image/png;base64,${details?.Foto}` }}
              style={styles.image}
            />

            <View
              style={{
                borderTopColor: theme.COLORS.GRAY_300,
                width: "100%",
              }}
            >
              <Text style={styles.infoTittle}>{details?.Nome}</Text>
              <Text style={styles.subtitle}>{details?.DescricaoCurta}</Text>
              <ProfileDetailsView
                label={`${t('phone')}1 : `}
                content={details?.Telefone1 ?? `${t('noPhone')}`}
              />
              <ProfileDetailsView
                label={`${t('phone')}2 : `}
                content={details?.Telefone2 ?? `${t('noPhone')}`}
              />
              <ProfileDetailsView
                label={`${t('address')} : `}
                content={details?.Endereco ?? `${t('noAddress')}`}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.infoTittle}>{t('about')}</Text>
            <Text style={styles.subtitle}>{details?.Descricao}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
