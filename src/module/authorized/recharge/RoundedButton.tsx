import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { SizeDimens, Colors } from '@res'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { TextView } from '@component'

export type RoundedButtonProps = {
    title?: string
    onPress?: () => void
}

export const RoundedButton: React.FC<RoundedButtonProps> = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.container]}
        >
            <TextView
                text={props.title}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(4.5),
        borderRadius: responsiveHeight(4.5) * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(5),
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: Colors.primaryWhite
    }
})
