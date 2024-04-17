import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import theme from "../../theme/global";
import { FormCustomInputProps } from "../../@types";

export function FormCustomInput({label, ...rest }: FormCustomInputProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      <TextInput
        {...rest}
        style={styles.input}
        placeholderTextColor={theme.COLORS.GRAY_300}
      />
    </View>
  );
}
