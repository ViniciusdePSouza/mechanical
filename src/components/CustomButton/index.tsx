import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { CustomButtonProps } from "../../@types";

export function CustomButton({
  title,
  language = "en",
  onPressFunction,
  variant,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => onPressFunction(language)}
      style={variant === "PRIMARY" ? styles.primary : styles.secondary}
    >
      <Text
        style={
          variant === "PRIMARY" ? styles.titlePrimary : styles.titleSecondary
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
