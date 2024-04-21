import { ProfileDetailsViewProps } from "../../@types";

import { View, Text } from "react-native";

import { styles } from "./styles";

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
