import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, StyleProp, ViewStyle } from 'react-native'
import { TextView } from '../text-view'
import { FontSizeDimens, Colors } from '@res'

export type VIconProps = {
    icon: object,
    title: string,
    cotainerStyle?: StyleProp<ViewStyle>
    onPress?: () => void
}

export const VIcon: React.FC<VIconProps> = (props) => {
    return (
        <TouchableOpacity
            style={[styles.container, props.cotainerStyle]}
            onPress={props.onPress}
        >
            <Image source={props.icon} />
            <TextView
                style={styles.title}
                text={props.title}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginTop: 4,
        fontSize: FontSizeDimens.lg,
        fontWeight: '700',
        color: Colors.primaryBlue
    }
})
