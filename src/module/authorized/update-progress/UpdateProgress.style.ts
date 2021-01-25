import { StyleSheet } from 'react-native';
import { Colors, FontSizeDimens, SizeDimens } from '@res';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export const UpdateProgressStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
            paddingTop:65,
        backgroundColor:'white'
      },
      list: {
        flex: 1,
        marginTop:20,
      },
    content: {
        padding: 16}
    
})