import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, Image } from 'react-native'
import { TextView } from '@component'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Colors, FontSizeDimens } from '@res'
import { AssetIcons } from '@assets'

export type PaymentTypeSelectorProps = {
    containerStyle?: StyleProp<ViewStyle>
}

export const PaymentTypeSelector: React.FC<PaymentTypeSelectorProps> = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const onButtonPress = React.useCallback((index: number) => () => {
        setActiveIndex(index)
    }, [])

    const renderTick = React.useCallback((index: number) => {
        if (activeIndex !== index) return null
        return (
            <Image
                style={styles.tick}
                source={AssetIcons.BLUE_TICK}
            />
        )
    }, [activeIndex])

    return (
        <View style={[styles.container, props.containerStyle]}>
            <TouchableOpacity
                onPress={onButtonPress(0)}
                style={styles.button}
            >
                <TextView
                    style={activeIndex === 0 ? styles.activeTitle : styles.inactiveTitle}
                    text='Online'
                />
                {renderTick(0)}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onButtonPress(1)}
                style={[styles.button, styles.rightButton]}
            >
                <TextView
                    style={activeIndex === 1 ? styles.activeTitle : styles.inactiveTitle}
                    text='Tiền mặt'
                />
                {renderTick(1)}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: Colors.primaryGray50,
        borderRadius: 10
    },
    button: {
        position: 'relative',
        height: responsiveHeight(5),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButton: {
        borderLeftWidth: 2,
        borderColor: Colors.primaryGray50,
    },
    activeTitle: {
        fontWeight: '700',
        fontSize: FontSizeDimens.md
    },
    inactiveTitle: {
        fontSize: FontSizeDimens.md,
        color: Colors.primaryGray
    },
    tick: {
        position: 'absolute',
        right: -10,
        top: -10
    }
})
