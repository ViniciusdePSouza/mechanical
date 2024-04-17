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
import { SearchPlayerFormData, WorkshopProps } from "../../@types";
import { WorkshopCard } from "../../components/WorkshopCard";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const SearchPlayerSchema = yup.object({
  name: yup.string(),
});

export function Home() {
  const [workshops, setWorkshops] = useState<WorkshopProps[]>([
    {
      id: 1,
      active: true,
      address: "Rua Ignês Maria, 326 - Betim Industrial",
      associationCode: 601,
      description:
        "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados.  Funilaria Pintura Limpeza geral do veículo Serviços de mecânica Revitalização de pintura (contratação à parte)",
      shortDescription: "Lanternagem e Pintura",
      email: "contato@hinovamobile.com.br",
      latitude: "-19.9622435",
      longitude: "-44.175102",
      name: "Oficina Gecar",
      phone1: "31-34193100",
      phone2: null,
      photo: "",
      userFeedback: 0,
    },
    {
      id: 2,
      active: true,
      address: "Rua Ignês Maria, 326 - Betim Industrial",
      associationCode: 601,
      description:
        "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados.  Funilaria Pintura Limpeza geral do veículo Serviços de mecânica Revitalização de pintura (contratação à parte)",
      shortDescription: "Lanternagem e Pintura",
      email: "contato@hinovamobile.com.br",
      latitude: "-19.9622435",
      longitude: "-44.175102",
      name: "Oficina Tralala",
      phone1: "31-34193100",
      phone2: null,
      photo: "",
      userFeedback: 0,
    },
    {
      id: 3,
      active: true,
      address: "Rua Ignês Maria, 326 - Betim Industrial",
      associationCode: 601,
      description:
        "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados.  Funilaria Pintura Limpeza geral do veículo Serviços de mecânica Revitalização de pintura (contratação à parte)",
      shortDescription: "Lanternagem e Pintura",
      email: "contato@hinovamobile.com.br",
      latitude: "-19.9622435",
      longitude: "-44.175102",
      name: "Oficina Legal",
      phone1: "31-34193100",
      phone2: null,
      photo: "",
      userFeedback: 0,
    },
  ]);
  const [exibitionWorkshops, setExibitionWorkshops] = useState<WorkshopProps[]>(
    []
  );
  const { control, handleSubmit, reset } = useForm<SearchPlayerFormData>({
    resolver: yupResolver(SearchPlayerSchema),
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
      workshop.name.toLowerCase().includes(name!.toLowerCase())
    );

    setExibitionWorkshops(filteredWorkshops);

    reset();
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

  useEffect(() => {
    setExibitionWorkshops(workshops);
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

  // useEffect(() => {
  //   fetchWorkshops();
  // }, []);
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
