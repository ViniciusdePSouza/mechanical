import { StyleSheet } from "react-native";
import theme  from '../../theme/global'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: "row",
        gap: 12,
    },
    title: {
        fontWeight: "700",
        fontSize: 16,
        color: theme.COLORS.GRAY_200,
        marginBottom: 8,
    }
})