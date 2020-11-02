import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import { SizeDimens, Colors, FontSizeDimens } from '@res'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { TextView } from '../text-view'
import { AssetIcons } from '@assets'
import { ModalPicker, KeyValuePair } from './ModalPicker'

export type ValuePickerProps = {
    onChangeValue?: (id: string) => void
    containerStyle?: StyleProp<ViewStyle>
    data: KeyValuePair[]
    title?: string
    selectedId?: string,
    error?: string
}

export const ValuePicker: React.FC<ValuePickerProps> = (props) => {

    const selectedItem = React.useMemo(() => {
        return props.data.find(x => x.id === props.selectedId)
    }, [props.data, props.selectedId])

    const [isValuePickerVisible, setValuePickerVisible] = useState(false)
    const toglePicker = React.useCallback(() => {
        setValuePickerVisible(!isValuePickerVisible)
    }, [isValuePickerVisible])

    const onPickItem = React.useCallback((item: KeyValuePair) => {
        setValuePickerVisible(false)
        if (props.onChangeValue) {
            props.onChangeValue(item.id)
        }
    }, [isValuePickerVisible])


    const renderError = React.useMemo(() => {
        if (!props.error) return null
        return (
            <TextView
                style={styles.error}
                text={props.error}
            />
        )
    }, [props.error])
    return (
        <>
            <TouchableOpacity
                onPress={toglePicker}
                style={[styles.container, props.containerStyle]}>
                <TextView
                    text={selectedItem?.value}
                />
                <Image
                    source={AssetIcons.BLACK_DOWN_CHEV}
                />
            </TouchableOpacity>
            <ModalPicker
                title={props.title}
                onPickItem={onPickItem}
                visible={isValuePickerVisible}
                onRequestClose={toglePicker}
                data={props.data}
            />
            {renderError}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: SizeDimens.mdInput,
        borderRadius: SizeDimens.mdInput * 0.5,
        borderWidth: 1,
        borderColor: Colors.primaryBlue,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(4),
        justifyContent: 'space-between'
    },
    error: {
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        color: Colors.primaryRed,
        fontSize: FontSizeDimens.xSm,
    }
})
