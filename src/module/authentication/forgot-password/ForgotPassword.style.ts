import { StyleSheet } from 'react-native';
import { SizeDimens, TextStyles, Colors, FontSizeDimens } from '@res';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export const ForgotPasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: SizeDimens.headerHeight,
        paddingTop: SizeDimens.statusBarHeight,
        paddingHorizontal: 16
    },
    input: {
        marginTop: responsiveHeight(3),
    },
    content: {
        flex: 1,
        padding: 16
    },
    title: {
        ...TextStyles.title,
        textAlign: 'center',
        width: '100%',
        padding: 16,
        paddingVertical: 32
    },
    footerContainer: {
        alignItems: 'center',
    },
    button: {
        width: '50%',
        alignSelf: 'center',
        marginTop: responsiveHeight(4),
        marginBottom: responsiveHeight(3)
    },
    hotline: {
        ...TextStyles.label,
        color: Colors.primaryRed
    }
})