import React from 'react'
import { View, Text, StyleSheet, Image, StyleProp, ViewStyle } from 'react-native'
import { TextView } from '../text-view'
import { FontSizeDimens, Colors } from '@res'

export type HIconProps = {
    icon: object,
    title: string,
    cotainerStyle?: StyleProp<ViewStyle>
}

export const HIcon: React.FC<HIconProps> = (props) => {
    return (
        <View style={[styles.container, props.cotainerStyle]}>
            <Image source={props.icon} />
            <TextView
                style={styles.title}
                text={props.title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginLeft: 5,
        fontSize: FontSizeDimens.xSm,
        fontWeight: '700',
        color: Colors.primaryBlue
    }
})
