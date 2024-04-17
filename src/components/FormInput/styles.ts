import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    gap: 16,
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: 16,
  },
  label: {
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: "400",
    color: theme.COLORS.GRAY_200,
  },

  input: {
    width: "100%",
    color: theme.COLORS.YELLOW_700,
    backgroundColor: theme.COLORS.GRAY_400,
    padding: 12,
    borderRadius: 8,
  },
});
