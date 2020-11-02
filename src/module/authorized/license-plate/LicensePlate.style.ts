import { StyleSheet } from 'react-native';
import { Colors, FontSizeDimens, SizeDimens } from '@res';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const LicensePlateStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryWhite
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0
    },
    description: {
        marginTop: responsiveHeight(2.7),
        fontSize: FontSizeDimens.md,
        fontWeight: '700',
        color: Colors.primaryBlue
    },
    updateText: {
        marginTop: responsiveHeight(2.7),
        fontSize: FontSizeDimens.lg,
        fontWeight: '700',
        color: Colors.primaryRed
    },
    licensePlateContainer: {
        flexDirection: 'row',
        marginTop: 16,
        flexShrink: 1,
        alignItems: 'flex-start'
    },
    plateNameContainer: {
        justifyContent: 'center',
        height: SizeDimens.mdInput
    },
    platePlusContainer: {
        justifyContent: 'center',
        height: SizeDimens.mdInput
    },
    plateName: {
        fontSize: FontSizeDimens.md,
        fontWeight: '700',
        color: Colors.primaryBlue
    },
    plates: {
        flex: 1,
    },
    plateInput: {
        flex: 1,
        paddingHorizontal: responsiveWidth(5.5),
        marginBottom: responsiveHeight(2.5)
    }
})