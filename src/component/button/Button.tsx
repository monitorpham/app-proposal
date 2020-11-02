import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as RButton, ButtonProps } from 'react-native-elements';
import { Colors, LinearColors, TextStyles, SizeDimens } from '@res';
import LinearGradient from 'react-native-linear-gradient';

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <RButton
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: LinearColors.lineGreen
            }}
            {...props}
            title={props.title?.toLocaleUpperCase()}
            type='clear'
            buttonStyle={[styles.buttonStyle, props.buttonStyle]}
            titleStyle={styles.titleStyle}
        />
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.primaryGreen,
        borderRadius: SizeDimens.button * 0.5,
        height: SizeDimens.button
    },
    titleStyle: {
        color: Colors.primaryWhite,
        ...TextStyles.title,
    }
})
