import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.COLORS.GRAY_400,
    paddingHorizontal: 16,
    paddingTop: 40
  },

  scrollArea: {
    width: "90%",
    alignItems: "center",
  },

  title: {
    fontSize: theme.FONT_SIZE.XL,
    fontWeight: "700",
    color: theme.COLORS.YELLOW_700,
    textAlign: "center",
    marginBottom: 12,
  },

  form: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 8,
    paddingVertical: 12,

    marginBottom: 36
  },

  sectionTitle: {
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: "700",
    color: theme.COLORS.GRAY_200,
    textAlign: "center",
    marginTop: 12,
  },

  button: {
    alignItems: "center",
    color: theme.COLORS.GRAY_700,
    paddingVertical: 20,
    backgroundColor: theme.COLORS.YELLOW_700,
    borderRadius: 8,
  },
  buttonText:{
    color: theme.COLORS.GRAY_700,
    fontSize: 16,
    fontWeight: "700",
  },
  errorMessage: {
    color: theme.COLORS.RED
  }
});
