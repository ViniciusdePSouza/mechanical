import { ActivityIndicator, View } from "react-native";
import { styles } from "../styles";
import theme from "../../../theme/global";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.COLORS.YELLOW_700} />
    </View>
  );
}
