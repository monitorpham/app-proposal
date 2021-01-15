import React from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { TextView } from './TextView'
import { FontSizeDimens, Colors } from '@res'

export type KeyValueTextProps = {
    title?: string,
    value?: string,
    id?:number,
    containerStyle?: StyleProp<ViewStyle>
}

export const KeyValueText: React.FC<KeyValueTextProps> = (props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <TextView
                style={styles.title}
                text={props.title}
            />
            <TextView
                style={styles.value}
                text={props.value}
                // numberOfLines={2}
            />
            {/* <TextView
                style={styles.value}
                id={props.id}
            /> */}
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    title: {
        fontWeight: '700',
        fontSize: FontSizeDimens.md
    },
    value: {
        flex: 1,
        marginLeft: 2,
        fontSize: FontSizeDimens.md,
        color: Colors.primaryBlue,
        // backgroundColor: 'blue'
    }
})
