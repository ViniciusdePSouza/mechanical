import { StyleSheet } from "react-native";
import theme from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 32,
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
  button: {
    alignItems: "flex-start",
    width: "30%",
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
    marginHorizontal: 12,
  },
  banner: {
    flexShrink: 1,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 12,
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 8,
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
    marginTop: 12,
  },
});
