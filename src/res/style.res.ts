import { StyleSheet } from 'react-native';
import { FontSizeDimens } from './dimen.res';

export const TextStyles = StyleSheet.create({
    title: {
        fontSize: FontSizeDimens.title,
        fontWeight: '700'
    },
    navTitle: {
        fontSize: FontSizeDimens.navTitle,
        fontWeight: '700'
    },
    label: {
        fontSize: FontSizeDimens.md,
    }
})