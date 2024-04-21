import {StyleSheet } from 'react-native'
import theme from '../../theme/global'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    label: {
        fontWeight: "700",
        fontSize: 16,
        color: theme.COLORS.GRAY_200,
        marginBottom: 8,
    },
    content: {
        fontWeight: "400",
        fontSize: 16,
        color: theme.COLORS.GRAY_200,
        marginBottom: 8,
    }
})