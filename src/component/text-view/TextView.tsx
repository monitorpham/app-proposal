import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle, StyleProp, TextProps } from 'react-native'

export interface TextViewProps extends TextProps {
    text?: string,
}

export const TextView: React.FC<TextViewProps> = (props) => {
    return (
        <Text {...props}>
            {props.text}
            {props.children}
        </Text>
    )
}
