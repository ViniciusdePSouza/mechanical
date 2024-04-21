import { SearchPlayerFormData, WorkshopProps } from "../../@types";

import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";

import theme from "../../theme/global";
import { styles } from "./styles";

import { getWorkshops } from "../../services/workshopService";

import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";

import { AxiosError } from "axios";

import { CustomInput } from "../../components/CustomInput";
import { AppError } from "../../utils/AppError";
import { WorkshopCard } from "../../components/WorkshopCard";

import { Icon } from "@rneui/themed";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useTranslation } from "react-i18next";
import { Loading } from "../../components/Loading";
import { useIsLoading } from "../../hooks/isLoadingContext";

const SearchWorkshopSchema = yup.object({
  name: yup.string(),
});

export function Home() {
  const [workshops, setWorkshops] = useState<WorkshopProps[]>([]);
  const [exibitionWorkshops, setExibitionWorkshops] = useState<WorkshopProps[]>(
    []
  );
  const isLoading = useIsLoading();
  const { control, handleSubmit, reset } = useForm<SearchPlayerFormData>({
    resolver: yupResolver(SearchWorkshopSchema),
  });
  const { t } = useTranslation();

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
    isLoading.startRequest();
    try {
      const response = await getWorkshops(601);

      setWorkshops(response);

      isLoading.finishRequest();

      return response;
    } catch (error) {
      isLoading.finishRequest();
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

  if(isLoading.isLoading) {
    return <Loading/>
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          ListHeaderComponent={<FlatListHeader />}
          data={exibitionWorkshops}
          renderItem={({ item }: { item: WorkshopProps }) => (
            <WorkshopCard workshop={item} />
          )}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
