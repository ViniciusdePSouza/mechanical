import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import theme from "../../theme/global";
import { FormCustomInputProps } from "../../@types";
import { TextInputMask } from "react-native-masked-text";

export function FormCustomInput({
  options,
  type,
  label,
  ...rest
}: FormCustomInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {options && type ? (
        <TextInputMask
          {...rest}
          style={styles.input}
          type={type}
          options={options}
          placeholderTextColor={theme.COLORS.GRAY_300}
        />
      ) : (
        <TextInput
          {...rest}
          style={styles.input}
          placeholderTextColor={theme.COLORS.GRAY_300}
        />
      )}
    </View>
  );
}
