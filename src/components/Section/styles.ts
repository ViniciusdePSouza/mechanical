import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  infoTittle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.COLORS.GRAY_100,
    marginBottom: 12,
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 16,
    color: theme.COLORS.GRAY_200,
    marginBottom: 8,
  },
  section: {
    marginVertical: 12,
    paddingBottom: 16
  },
});
