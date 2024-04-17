import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 32,
    justifyContent: "space-evenly",
    backgroundColor: theme.COLORS.GRAY_400,
  },
  buttonWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly", 
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: theme.COLORS.YELLOW_500,
  }
});
