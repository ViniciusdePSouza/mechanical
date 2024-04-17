import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { Icon } from "@rneui/themed";
import theme from "../../theme/global";

export function CustomInput({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Icon type="entypo" name="user" color={theme.COLORS.GRAY_300} />
      <TextInput
        {...rest}
        style={styles.input}
        placeholderTextColor={theme.COLORS.GRAY_300}
      />
    </View>
  );
}
