import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    minHeight: 66,
    width: "100%",
    alignItems: "center",
    gap: 16,
    backgroundColor: theme.COLORS.GRAY_500,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 16,
  },

  input: {
    width: '85%',
    color: theme.COLORS.YELLOW_700,
    backgroundColor: theme.COLORS.GRAY_400,
    padding: 8,
    borderRadius: 8
  },
});
