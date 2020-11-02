import React from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { Input, InputProps } from 'react-native-elements'
import { FontSizeDimens, Colors, SizeDimens } from '@res'

export type RoundedInputProps = {
    inputProps?: InputProps,
    containerStyle?: StyleProp<ViewStyle>
    onChangeText?: (value: string) => void,
    error?: string,
    value: string,
}

export const RoundedInput: React.FC<RoundedInputProps> = (props) => {
    const renderInput = React.useCallback(() => {
        return (
            <Input
                {...props.inputProps}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                inputStyle={[styles.inputStyle, props.inputProps?.inputStyle]}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        )
    }, [props])
    return (
        <View style={[styles.container, props.containerStyle]}>
            {renderInput()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.primaryBlue,
        height: SizeDimens.mdInput,
        borderRadius: SizeDimens.mdInput * 0.5,
        justifyContent: 'center'
    },
    inputStyle: {
        fontSize: FontSizeDimens.input,
        marginLeft: 16,
        color: Colors.primaryBlue,
        fontWeight: '700',
        textAlignVertical: 'center'
    }
})
