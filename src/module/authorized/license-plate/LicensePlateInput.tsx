import React, { useState } from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle, Platform, Image, ActivityIndicator } from 'react-native'
import { RoundedInput } from '@component'
import { Colors, FontSizeDimens } from '@res'
import { AssetIcons } from '@assets'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CarLicensePlate } from '@data'
import { isAddedPlate } from './Utils'
import { ApiModule } from '@di'
import { useUser } from '@shared-state'

export type LicensePlateInputProps = {
    onChangeValue?: (code: string, value: string) => void
    containerStyle?: StyleProp<ViewStyle>
    onTrashPress?: () => void,
    onRemoveSuccess: () => void | Promise<void>
    plate: CarLicensePlate,
    disabled: boolean
}

export const LicensePlateInput: React.FC<LicensePlateInputProps> = (props) => {
    const [{ user }] = useUser()
    if (!user) return null
    const { plate } = props
    const [value, setValue] = useState(plate.licensePlate)
    const [isRemoving, setRemoving] = useState(false)

    const onChangeValue = React.useCallback((text: string) => {
        setValue(text)
        plate.licensePlate = text
    }, [plate])

    const onRemove = React.useCallback(async () => {
        if (!isAddedPlate(props.plate.id)) {
            setRemoving(true)
            await ApiModule.shared().userDatasource.removeLicensePlate(user.id, props.plate.id)
            setRemoving(false)
            props.onRemoveSuccess()
        }

        if (props.onTrashPress) {
            props.onTrashPress()
        }
    }, [props.onRemoveSuccess, props.onTrashPress])

    const renderTrash = React.useMemo(() => {
        if (isRemoving) return <ActivityIndicator color={Colors.primaryRed} />
        return (
            <TouchableOpacity onPress={onRemove}>
                <Image
                    style={styles.trash}
                    source={AssetIcons.RED_TRASH}
                />
            </TouchableOpacity>
        )
    }, [isRemoving, props.onRemoveSuccess, props.onTrashPress])

    return (
        <View style={[styles.container, props.containerStyle]}>
            <RoundedInput
                containerStyle={styles.valueInput}
                value={value}
                onChangeText={onChangeValue}
                inputProps={{
                    inputStyle: styles.inputStyle,
                    maxLength: 10,
                    disabled: props.disabled
                }}
            />
            {renderTrash}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    valueInput: {
        width: '60%'
    },
    trash: {
        marginLeft: responsiveWidth(4)
    },
    inputStyle: {
        fontWeight: '700',
        fontSize: Platform.select({
            ios: FontSizeDimens.lg,
            android: FontSizeDimens.md
        }),
        color: Colors.primaryBlue
    }
})
