import { StyleSheet } from 'react-native';
import { Colors, FontSizeDimens } from '@res';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export const PersonalInfomationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryWhite
    },
    content: {
        flex: 1
    },
    component: {
        marginHorizontal: 16,
        marginTop: responsiveHeight(3),
    },
    updateButton: {
        marginTop: responsiveHeight(3),
        width: '50%',
        alignSelf: 'center'
    }
})