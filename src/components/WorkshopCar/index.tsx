import { View, Text } from "react-native";
import { styles } from "./styles";
import { Icon } from "@rneui/themed";
import theme from "../../theme/global";
import { TouchableOpacity } from "react-native-gesture-handler";

export function WorkshopCard() {
  return (
    <View style={styles.container}>
      <Icon
        type="antdesign"
        name={"team"}
        color={theme.COLORS.YELLOW_500}
        size={48}
      />
      <View>
        <Text style={styles.title}>Nome da oficina</Text>
        <Text style={styles.description}>Descrição curta da oficina</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.details}>Details</Text>
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
