import { StyleSheet } from 'react-native';
import { Colors, FontSizeDimens, SizeDimens } from '@res';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const RechargeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryWhite
    },
    content: {
        padding: 16,
        minHeight: responsiveHeight(80)
    },
    title: {
        fontSize: FontSizeDimens.xMd,
        fontWeight: '700'
    },
    quickAmountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2.5)
    },
    amountInput: {
        marginTop: responsiveHeight(2.5),
        height: responsiveHeight(6),
        borderWidth: 0
    },
    contentInput: {
        marginTop: responsiveHeight(2.5),
        minHeight: 100
    },
    divider: {
        height: 1,
        backgroundColor: Colors.primaryGray50,
        marginVertical: responsiveHeight(5)
    },
    continueButton: {
        marginTop: responsiveHeight(2.5),
        width: responsiveWidth(50),
        height: SizeDimens.mdInput,
        alignSelf: 'center'
    }
})