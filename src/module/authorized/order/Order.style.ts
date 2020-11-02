import { StyleSheet } from 'react-native';
import { Colors } from '@res';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export const OrderStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryWhite
    },
    content: {
        padding: 14
    },
    divider: {
        marginVertical: responsiveHeight(3)
    },
    keyValue: {
        marginTop: responsiveHeight(1)
    },
    paymentType:{
        marginTop: responsiveHeight(3),
    },
    button: {
        marginTop: responsiveHeight(3),
        width: '50%',
        alignSelf: 'center'
    },
})