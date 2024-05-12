import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    marginBottom: 24
  },

  title: {
    fontSize: theme.FONT_SIZE.LG,
    fontWeight: "700",
    color: theme.COLORS.WHITE,
  },
  description: {
    fontSize: theme.FONT_SIZE.SM,
    fontWeight: "400",
    color: theme.COLORS.GRAY_200,
  },
  details: {
    fontSize: theme.FONT_SIZE.SM,
    fontWeight: "400",
    color: theme.COLORS.GRAY_500,
  },
  button: {
    alignItems: "center",
    gap: 4,
    color: theme.COLORS.GRAY_700,
    padding: 12,
    backgroundColor: theme.COLORS.YELLOW_700,
    borderRadius: 8,
  },
});
