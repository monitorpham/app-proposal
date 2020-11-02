import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from 'react-native-responsive-dimensions';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Platform } from 'react-native';

export const SizeDimens = {
    statusBarHeight: getStatusBarHeight(),
    headerRawHeight: responsiveHeight(7),
    headerHeight: responsiveHeight(7) + getStatusBarHeight(),

    input: responsiveHeight(
        Platform.select({
            ios: 7.3,
            android: 7.9
        })!
    ),
    mdInput: responsiveHeight(
        Platform.select({
            ios: 5,
            android: 5.5
        })!
    ),
    button: responsiveHeight(7.6),
}

export const FontSizeDimens = {
    sm: responsiveFontSize(1.2),
    xSm: responsiveFontSize(1.5),
    md: responsiveFontSize(1.8),
    xMd: responsiveFontSize(2.1),
    lg: responsiveFontSize(2.5),
    input: responsiveFontSize(1.8),

    navTitle: Platform.select({
        ios: responsiveFontSize(3.3),
        android: responsiveFontSize(3)
    }),
    title: responsiveFontSize(2.5),
    button: responsiveFontSize(2),
}
