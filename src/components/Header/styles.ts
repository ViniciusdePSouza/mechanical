import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  button: {
    alignItems: "flex-start",
    width: "30%",
  },

  appBar: {
    width: "100%",
    backgroundColor: theme.COLORS.GRAY_600,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    height: "13%",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginRight: 92,
    fontSize: 24,
    fontWeight: "bold",
    color: theme.COLORS.GRAY_200,
  },
});
