import { StyleSheet } from 'react-native';
import { SizeDimens, TextStyles, Colors, FontSizeDimens } from '@res';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export const SignInStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo:{
        justifyContent: 'center',
        alignSelf: 'center',
    },
    content: {
        flex: 1,
        paddingTop: SizeDimens.statusBarHeight * 1.2,
        padding: 16
    },
    title: {
        ...TextStyles.title,
        textAlign: 'center',
        width: '100%',
        padding: 16,
        paddingVertical: 15
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
    socialButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: responsiveHeight(4.5)
    },
    socialButton: {
        flex: 1
    },
    socialTitle: {
        ...TextStyles.label,
        color: Colors.primaryWhite,
        marginLeft: 6
    },
    signUpLink: {
        color: Colors.primaryBlue,
        fontSize: FontSizeDimens.md,
        fontWeight: '700',
        marginLeft: 8,
    },
    signInButton: {
        width: '50%',
        alignSelf: 'center',
        marginTop: responsiveHeight(8),
        marginBottom: responsiveHeight(3)
    },
    hotline: {
        ...TextStyles.label,
        color: Colors.primaryRed
    }
})