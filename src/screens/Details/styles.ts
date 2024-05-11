import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 18,
    flex: 1,
  },
  image: {
    marginBottom: 12,
    width: "100%",
    height: "40%",
    resizeMode: "contain",
    borderBottomWidth: 1,
    borderColor: theme.COLORS.GRAY_200,
  },
  content: {
    width: "100%",
    marginVertical: 12,
    flexGrow: 1,
    flex: 1
  },
  banner: {
    flexShrink: 1,
    maxHeight: "70%",
    marginTop: 12,
    paddingHorizontal: 12,
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 8,
    paddingBottom: 48,
  },
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
  profileItemTxt: {
    fontWeight: "700",
    fontSize: 16,
    color: theme.COLORS.GRAY_200,
    marginBottom: 8,
  },
  section: {
    marginVertical: 12,
  },
});
