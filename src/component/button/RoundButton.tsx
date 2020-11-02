import React from 'react'
import { View, Text, StyleSheet, ImageSourcePropType, Image, StyleProp, ViewStyle } from 'react-native'
import { ListItem } from 'react-native-elements'
import { SizeDimens, Colors, FontSizeDimens } from '@res'
import { TextView } from '../text-view'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'

export type RoundButtonProps = {
    title?: string
    rightIcon?: ImageSourcePropType,
    containerStyle?: StyleProp<ViewStyle>
    onPress?: () => void
}

export const RoundButton: React.FC<RoundButtonProps> = (props) => {

    const renderRightIcon = React.useCallback(() => {
        if (!props.rightIcon) return null
        return (
            <Image source={props.rightIcon} />
        )
    }, [props.rightIcon])

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.container, props.containerStyle]}
        >
            <TextView
                style={styles.title}
                text={props.title}
            />
            {renderRightIcon()}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: SizeDimens.button,
        borderRadius: SizeDimens.button * 0.5,
        borderWidth: 1,
        borderColor: Colors.primaryBlue,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(4)
    },
    title: {
        flex: 1,
        fontSize: FontSizeDimens.lg,
        fontWeight: '700'
    }
})
