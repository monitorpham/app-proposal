import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { Input, InputProps } from 'react-native-elements';
import { AssetIcons } from '@assets';
import { FontSizeDimens, Colors, SizeDimens } from '@res';
import { TextView } from '../text-view';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export type InputFieldState = 'DEFAULT' | 'VALID' | 'ERROR'

export type InputFieldProps = {
    inputProps?: InputProps,
    dropContainerView?: boolean
    containerStyle?: StyleProp<ViewStyle>
    inputContainerStyle?: StyleProp<ViewStyle>
    contentStyle?: StyleProp<ViewStyle>
    onChangeText?: (value: string) => void,
    error?: string,
    value?: string,
    activeIcon?: object,
    defaultIcon?: object
}

export const InputField: React.FC<InputFieldProps> = (props) => {

    const state = React.useMemo((): InputFieldState => {
        if (props.error) {
            return 'ERROR'
        } else if (props.value) {
            return 'VALID'
        } else {
            return 'DEFAULT'
        }
    }, [props.value, props.error])

    const renderInput = React.useCallback(() => {
        const leftIcon = state === 'VALID' ? props.activeIcon : props.defaultIcon
        return (
            <Input
                multiline={false}
                {...props.inputProps}
                inputContainerStyle={[{ borderBottomColor: 'transparent' }, props.inputProps?.containerStyle]}
                leftIcon={leftIcon && <Image source={leftIcon} />}
                disabledInputStyle={{
                    color: Colors.primaryGray
                }}
                inputStyle={[styles.inputStyle, props.inputProps?.inputStyle]}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        )
    }, [props, state])
    const renderError = React.useMemo(() => {
        if (!props.error) return null
        return (
            <TextView
                style={styles.error}
                text={props.error}
            />
        )
    }, [props.error])

    const render = () => {
        return (
            <>
                <View style={[styleProcesser.container(state), props.inputContainerStyle]}>
                    <View style={[styles.content, props.contentStyle]}>
                        {renderInput()}
                    </View>
                </View>
                {renderError}
            </>
        )
    }
    if (props.dropContainerView) {
        return render()
    }
    return (
        <View style={[props.containerStyle]}>
            {render()}
        </View>
    )
}

const styleProcesser = {
    container: (state: InputFieldState): StyleProp<ViewStyle> => ({
        borderRadius: SizeDimens.input * 0.5,
        height: SizeDimens.input,
        borderWidth: 1,
        borderColor: state === 'VALID' ? Colors.primaryBlue : Colors.primaryWhite,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: Colors.primaryWhite
    }),
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        flex: 1
    },
    inputStyle: {
        fontSize: FontSizeDimens.input,
        marginLeft: 16,
        color: Colors.primaryBlue50
    },
    error: {
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        color: Colors.primaryRed,
        fontSize: FontSizeDimens.xSm,
    }
})
