import { StyleSheet } from 'react-native';
import { Colors, FontSizeDimens, TextStyles } from '@res';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export const WalletStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryWhite
    },
    walletContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    balanceContainer: {
        flex: 1,
        padding: responsiveWidth(4.5),
        justifyContent: 'center'
    },
    balanceTitle: {
        fontSize: FontSizeDimens.md,
        color: Colors.primaryWhite
    },
    balanceValue: {
        fontSize: FontSizeDimens.lg,
        fontWeight: '700',
        color: Colors.primaryWhite
    },
    chargeButton: {
        backgroundColor: Colors.primaryWhite,
        paddingHorizontal: 32,
        height: responsiveHeight(5.8),
        borderRadius: responsiveHeight(5.8) * 0.5,
        justifyContent: 'center'
    },
    chargeButtonTitle: {
        ...TextStyles.title,
        color: Colors.primaryRed
    },
    content: {
        flex: 1
    },
    title: {
        padding: 12,
        fontSize: FontSizeDimens.lg,
        fontWeight: '500'
    }
})