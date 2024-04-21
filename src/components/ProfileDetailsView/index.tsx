import { View, Text } from "react-native";
import { styles } from "./styles";
import { ProfileDetailsViewProps } from "../../@types";

export function ProfileDetailsView({
  label,
  content,
}: ProfileDetailsViewProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}
