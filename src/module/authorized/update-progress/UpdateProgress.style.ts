import { StyleSheet } from 'react-native';
import { Colors, FontSizeDimens, SizeDimens } from '@res';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export const UpdateProgressStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryWhite
    },
    content: {
        padding: 16
    },
    dateTimeContainer: {
        marginTop: responsiveHeight(2),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    picker: {
        flex: 1,
        marginHorizontal: responsiveWidth(1.2)
    },
    adressPicker: {
        marginTop: responsiveWidth(4)
    },
    licensePicker: {
        marginTop: responsiveWidth(4)
    },
    title: {
        fontSize: FontSizeDimens.md,
        fontWeight: '700'
    },
    divider: {
        marginVertical: responsiveHeight(2)
    },
    contentInput: {
        borderColor: Colors.primaryBlue,
        height: SizeDimens.mdInput,
        // width: '45%',
        marginTop: responsiveHeight(2),
        
    },
    addDateInput:{
        borderColor: Colors.primaryBlue,
        height: SizeDimens.mdInput,
        width: '45%',
        marginTop: responsiveHeight(2),
    },
    button: {
        marginTop: responsiveHeight(3),
        width: '50%',
        alignSelf: 'center',
    },
})