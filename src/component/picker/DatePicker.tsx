import React, { useState } from 'react'
import { StyleSheet, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import { SizeDimens, Colors } from '@res'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { TextView } from '../text-view'
import moment from 'moment'
import { AssetIcons } from '@assets'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

export type DatePickerProps = {
    onChangeValue?: (value: Date) => void
    containerStyle?: StyleProp<ViewStyle>
    defaltValue?: Date
}

export const DatePicker: React.FC<DatePickerProps> = (props) => {
    const [value, setValue] = React.useState(props.defaltValue);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false)
    const toglePicker = React.useCallback(() => {
        setDatePickerVisible(!isDatePickerVisible)
    }, [isDatePickerVisible])

    const handleConfirm = React.useCallback((date: Date) => {
        toglePicker()
        setValue(date)
        if (props.onChangeValue) {
            props.onChangeValue(date)
        }
    }, [toglePicker, props.onChangeValue])

    return (
        <>
            <TouchableOpacity
                onPress={toglePicker}
                style={[styles.container, props.containerStyle]}>
                <TextView
                    text={moment(value).format('DD-MM-YYYY')}
                />
                <Image
                    source={AssetIcons.GRAY_CALLENDAR}
                />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode='date'
                onConfirm={handleConfirm}
                onCancel={toglePicker}
            />
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
    }
})
