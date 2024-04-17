import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
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
import theme from "../../theme/global";
import { WorkshopProps } from "../../@types";
import { WorkshopCard } from "../../components/WorkshopCar";

export function Home() {
  const [workshops, setWorkshops] = useState<WorkshopProps[]>([
    {
      id: 1,
      active: true,
      address: "Rua Ignês Maria, 326 - Betim Industrial",
      associationCode: 601,
      description: "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados.  Funilaria Pintura Limpeza geral do veículo Serviços de mecânica Revitalização de pintura (contratação à parte)",
      shortDescription: "Lanternagem e Pintura",
      email: "contato@hinovamobile.com.br",
      latitude: "-19.9622435",
      longitude: "-44.175102",
      name: "Oficina Gecar",
      phone1: "31-34193100",
      phone2: null,
      photo: "",
      userFeedback: 0
    },
    {
      id: 2,
      active: true,
      address: "Rua Ignês Maria, 326 - Betim Industrial",
      associationCode: 601,
      description: "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados.  Funilaria Pintura Limpeza geral do veículo Serviços de mecânica Revitalização de pintura (contratação à parte)",
      shortDescription: "Lanternagem e Pintura",
      email: "contato@hinovamobile.com.br",
      latitude: "-19.9622435",
      longitude: "-44.175102",
      name: "Oficina Gecar",
      phone1: "31-34193100",
      phone2: null,
      photo: "",
      userFeedback: 0
    },
    {
      id: 3,
      active: true,
      address: "Rua Ignês Maria, 326 - Betim Industrial",
      associationCode: 601,
      description: "A oficina Gecar presta serviços em Betim à mais de 30 anos, mantendo sempre a qualidade, respeito e transparência com seus clientes. Atuamos na área de funilaria e pintura, garantindo sempre sua satisfação em relação aos reparos em seu veículo, seja ele, usado ou semi novo, importado ou nacional. A garantia de nossos serviços é de 3 anos, tudo para garantirmos que nossos clientes se sintam sempre tranqüilos e satisfeitos. Serviços prestados.  Funilaria Pintura Limpeza geral do veículo Serviços de mecânica Revitalização de pintura (contratação à parte)",
      shortDescription: "Lanternagem e Pintura",
      email: "contato@hinovamobile.com.br",
      latitude: "-19.9622435",
      longitude: "-44.175102",
      name: "Oficina Gecar",
      phone1: "31-34193100",
      phone2: null,
      photo: "",
      userFeedback: 0
    },
  ]);
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

  const FlatListHeader = () => {
    
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
              <Icon name={"search"} color={theme.COLORS.GRAY_500} />
            </TouchableOpacity>
          </View>
        </View>
        <WorkshopCard/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
