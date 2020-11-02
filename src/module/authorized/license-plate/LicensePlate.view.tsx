import React from 'react'
import { View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, TextView, FetchStatusFullScreenIndicator, EmptyListView } from '@component'
import { useLicensePlate } from './LicensePlate.store'
import { LicensePlateProps } from './LicensePlate.type'
import { LicensePlateStyles } from './LicensePlate.style'
import { AssetIcons } from '@assets'
import { LicensePlateInput } from './LicensePlateInput'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CarLicensePlate } from '@data'
import { useUser } from '@shared-state'
import { generateId, isAddedPlate } from './Utils'

export const LicensePlate: React.FC<LicensePlateProps> = (props) => {
    const [{ licensePlates, getLicensePlateStatus }, action] = useLicensePlate()
    const [{ user }] = useUser()
    if (!user) return null

    React.useEffect(() => {
        action.getLicensePlates(user.id)
    }, [])

    const [plates, setPlates] = React.useState<CarLicensePlate[]>([])

    const onRefresh = React.useCallback(() => {
        action.getLicensePlates(user.id)
    }, [])

    const onUpdateButtonPress = React.useCallback(async () => {
        await action.updateLicensePlates(user.id, plates)
        setPlates([])
    }, [plates])

    const onIncressPlateButtonPress = React.useCallback(() => {
        const newPlate = new CarLicensePlate(generateId(), user.id, '', new Date(), false)
        const newPlates = plates.concat([newPlate])
        setPlates(newPlates)
    }, [plates])

    const onLicensePlateTrashPress = React.useCallback((plate: CarLicensePlate) => () => {
        if (isAddedPlate(plate.id)) {
            const index = plates.indexOf(plate)
            plates.splice(index, 1)
            setPlates([...plates])
        }
    }, [plates])

    const renderDescirption = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={LicensePlateStyles.description}
                    text='Bạn hãy cập nhập biển số vào đây để được sử dụng dịch vụ'
                />
                <TextView
                    style={LicensePlateStyles.description}
                    text='Quý khách có thể sử dụng nhiều biển số'
                />
            </>
        )
    }, [])

    const renderPlates = React.useMemo(() => {
        const dataSource = [...licensePlates, ...plates]
        if (dataSource.length === 0) {
            return (
                <EmptyListView />
            )
        }
        return dataSource.map((plate) => {
            return (
                <LicensePlateInput
                    onRemoveSuccess={onRefresh}
                    key={plate.id}
                    disabled={!isAddedPlate(plate.id)}
                    plate={plate}
                    onTrashPress={onLicensePlateTrashPress(plate)}
                    containerStyle={LicensePlateStyles.plateInput}
                />
            )
        })
    }, [plates, licensePlates])

    const renderLicensePlates = React.useMemo(() => {
        return (
            <View style={LicensePlateStyles.licensePlateContainer}>
                <View style={LicensePlateStyles.plateNameContainer}>
                    <TextView
                        style={LicensePlateStyles.plateName}
                        text='Biển số'
                    />
                </View>
                <View style={LicensePlateStyles.plates}>
                    {renderPlates}
                </View>
                <TouchableOpacity
                    onPress={onIncressPlateButtonPress}
                    style={LicensePlateStyles.platePlusContainer}
                >
                    <Image
                        source={AssetIcons.RED_CIRCLE_PLUS}
                    />
                </TouchableOpacity>
            </View>
        )
    }, [plates, licensePlates])

    const renderHeader = React.useMemo(() => {
        return (
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Danh sách biển số'
            />
        )
    }, [])

    return (
        <View style={LicensePlateStyles.container}>
            <FetchStatusFullScreenIndicator trackStatuses={[getLicensePlateStatus]} />
            {renderHeader}
            <KeyboardAwareScrollView
                style={LicensePlateStyles.content}
                bounces={false}
            >
                {renderDescirption}
                {renderLicensePlates}
                <TextView
                    onPress={onUpdateButtonPress}
                    style={LicensePlateStyles.updateText}
                    text='Cập nhật'
                />
            </KeyboardAwareScrollView>

        </View>
    )
}
