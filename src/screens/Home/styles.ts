import { StyleSheet } from "react-native";
import theme from '../../theme/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_400,
    padding: 16
  },

  inputWrapper: {
    width: '100%',
    flexDirection: 'row'
  },

  buttonWrapper: {
    width: '15%',
  },
  button:{
    alignItems: "center",
    color: theme.COLORS.GRAY_700,
    paddingVertical: 20,
    backgroundColor: theme.COLORS.YELLOW_700,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});
