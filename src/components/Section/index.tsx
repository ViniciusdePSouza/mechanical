import { t } from "i18next";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from 'react-native'
import theme from '../../theme/global'
import { styles } from "./styles";

interface SectionProps {
    title: SectionsTitle
    subtitle: string
}

type SectionsTitle = 'about' | 'contact' | 'information'

export function Section({title, subtitle}: SectionProps) {
  return (
    <ScrollView contentContainerStyle={styles.section}>
      <Text style={styles.infoTittle}>{t(`${title}`)}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </ScrollView>
  );
}
