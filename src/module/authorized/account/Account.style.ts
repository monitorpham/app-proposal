import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { Colors, FontSizeDimens } from '@res';

export const AccountStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryWhite
    },
    content: {
        flex: 1,
        padding: responsiveWidth(5),
        paddingTop: responsiveHeight(4)
    },
    buttonContainer: {
        marginBottom: 60
    },
    buttonDirection: {
        marginTop: responsiveHeight(2)
    }
})