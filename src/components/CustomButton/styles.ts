import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  secondary: {
    width: 100,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.COLORS.YELLOW_700,
    paddingVertical: 12,
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  primary: {
    alignItems: "center",
    color: theme.COLORS.GRAY_700,
    paddingVertical: 20,
    backgroundColor: theme.COLORS.YELLOW_700,
    borderRadius: 8,
  },

  titlePrimary: {
    color: theme.COLORS.GRAY_700,
    fontSize: 16,
    fontWeight: "700",
  },
  titleSecondary: {
    color: theme.COLORS.YELLOW_700,
    fontSize: 16,
    fontWeight: "400",
  },
});
