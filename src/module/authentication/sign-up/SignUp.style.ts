import { StyleSheet } from 'react-native';
import { SizeDimens, TextStyles, Colors, FontSizeDimens } from '@res';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export const SignUpStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: SizeDimens.headerHeight,
        paddingTop: SizeDimens.statusBarHeight,
        paddingHorizontal: 16
    },
    logo:{
        justifyContent: 'center',
        alignSelf: 'center',
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
        paddingVertical: 18
    },
    forgotPasswordLink: {
        color: Colors.primaryBlue,
        fontSize: FontSizeDimens.md,
        marginTop: 8,
        alignSelf: 'flex-end'
    },
    footerContainer: {
        alignItems: 'center',
    },
    signUpButton: {
        width: '50%',
        alignSelf: 'center',
        marginTop: responsiveHeight(6),
        marginBottom: responsiveHeight(3)
    },
    hotline: {
        ...TextStyles.label,
        color: Colors.primaryRed
    }
})