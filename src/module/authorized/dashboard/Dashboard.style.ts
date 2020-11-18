import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { StyleSheet } from 'react-native';
import { Colors } from '@res';

export const DashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryWhite
    },
    content: {
        marginTop: -responsiveWidth(3),
        zIndex: -1
    },
    buttonsContainer: {
        height: responsiveHeight(20),
        padding: 16,
        marginBottom: 60
    },
    leftBorderButton: {
        flex: 1,
        borderLeftWidth: 0.7,
        borderColor: Colors.primaryGray
    },
    borderBottomRow: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 0.7,
        borderColor: Colors.primaryGray
    }
})