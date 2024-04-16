import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export type ButtonType = "PRIMARY" | "SECONDARY";

interface CustomButtonProps {
  title: string;
  onPressFunction: (language: string) => void;
  language?: string;
  variant: ButtonType;
}

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
