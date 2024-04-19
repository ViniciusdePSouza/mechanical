import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { getWorkshops } from "../../services/workshopService";
import { AxiosError } from "axios";
import { AppError } from "../../utils/AppError";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "../../components/CustomInput";
import { Icon } from "@rneui/themed";
import theme from "../../theme/global";
import {
  SearchPlayerFormData,
  WorkshopAPIProps
} from "../../@types";
import { WorkshopCard } from "../../components/WorkshopCard";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const SearchWorkshopSchema = yup.object({
  name: yup.string(),
});

export function Home() {
  const [workshops, setWorkshops] = useState<WorkshopAPIProps[]>([]);
  const [exibitionWorkshops, setExibitionWorkshops] = useState<
    WorkshopAPIProps[]
  >([]);
  const { control, handleSubmit, reset } = useForm<SearchPlayerFormData>({
    resolver: yupResolver(SearchWorkshopSchema),
  });
  const navigation = useNavigation();
  const { t } = useTranslation();

  function handleNavigation() {
    navigation.navigate("Details" as never);
  }

  function handleSearchPlayer({ name }: SearchPlayerFormData) {
    if (name == undefined) {
      setExibitionWorkshops(workshops);
      return;
    }

    const filteredWorkshops = exibitionWorkshops.filter((workshop) =>
      workshop.Nome.toLowerCase().includes(name!.toLowerCase())
    );

    setExibitionWorkshops(filteredWorkshops);

    reset();
  }

  async function fetchWorkshops() {
    try {
      const response = await getWorkshops(601);

      setWorkshops(response);

      return response;
    } catch (error) {
      const isAppError = error instanceof AppError;
      const isAxiosError = error instanceof AxiosError;
      var title = "";
      if (isAppError || isAxiosError) {
        title = error.message;
      } else {
        title = "Unexpected error occurred";
      }

      Alert.alert(title);
    }
  }

  useEffect(() => {
    setExibitionWorkshops(workshops);
  }, [workshops]);

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const FlatListHeader = () => {
    return (
      <View style={styles.inputWrapper}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <CustomInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={t("searchByName")}
                onSubmitEditing={handleSubmit(handleSearchPlayer)}
              />
            );
          }}
        />

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleSearchPlayer)}
          >
            <Icon name={"search"} color={theme.COLORS.GRAY_500} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          ListHeaderComponent={<FlatListHeader />}
          data={exibitionWorkshops}
          renderItem={({ item }: { item: WorkshopAPIProps }) => (
            <WorkshopCard workshop={item} />
          )}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
