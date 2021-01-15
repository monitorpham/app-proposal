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
        height: responsiveHeight(75),
        // height: 100,
        flex: 1,
        padding: 16,
        paddingTop: 30,
        marginBottom: 60,
        flexDirection:'column',
        alignItems: 'center'
    },
    leftBorderButton: {
        flex: 1,
        // borderLeftWidth: 0,
        // elevation:2,
        // borderColor: Colors.primaryGray,
        // borderRadius: 13,
        borderWidth: 0,
        // paddingTop: 8
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 4,
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    borderBottomRow: {
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 20,
        // borderBottomWidth: 0,
        // borderColor: Colors.primaryGray,
        // elevation: 5,
    },
    allpro: {
        flex: 1,
        borderWidth: 0,
        // paddingTop: 8
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 4,
        shadowOffset: {
            width: 0,
            height: 3
        }
    }
})