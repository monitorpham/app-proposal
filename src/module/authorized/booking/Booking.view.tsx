import React from 'react'
import { View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, DatePicker, TimePicker, TextView, ValuePicker, Button, InputField, FetchStatusFullScreenIndicator, KeyValuePair } from '@component'
import { useBooking } from './Booking.store'
import { BookingProps } from './Booking.type'
import { BookingStyles } from './Booking.style'
import { AssetIcons } from '@assets'
import { Divider } from 'react-native-elements'
import { SizeDimens } from '@res'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { useUser } from '@shared-state'
import { StringUtils } from '@util'
import { LazyNavigationScreen } from '@layout'

type FormErrors = {
    plate?: string,
    price?: string
}

const isOrderable = (plateId?: string, price?: string) => {
    const errors = {
        plate: plateId ? '' : 'Chưa chọn biển số',
        price: Number(price) < 10000 ? `Mệnh giá nhỏ nhất là ${StringUtils.currenry(10000)}` : ''
    }
    const valid = !errors.plate && !errors.price
    return { valid, errors }
}

export const Booking: React.FC<BookingProps> = (props) => {
    const [{ agencies, getAgencyStatus, orderStatus, licensePlates, getLicensePlateStatus }, action] = useBooking()
    const [{ user, }] = useUser()
    if (!user) return null

    const { agencyId } = props.route.params

    const [price, setPrice] = React.useState('')
    const [selectedAgencyId, setAgencyId] = React.useState(agencyId)
    const [selectedLicensePlate, setSelectedLicensePlate] = React.useState<string>()
    const [time, setTime] = React.useState(new Date())
    const [date, setDate] = React.useState(new Date())
    const [errors, setErrors] = React.useState<FormErrors>({})

    React.useEffect(() => {
        action.getAgencies(user.id)
        action.getLicensePlates(user.id)
        return action.reset
    }, [])

    React.useEffect(() => {
        if (licensePlates[0]) {
            setSelectedLicensePlate(licensePlates[0].id)
        }
    }, [licensePlates])

    React.useEffect(() => {
        if (orderStatus === 'SUCCESS') {
            props.navigation.navigate('History')
            action.resetOrder()
        }
    }, [orderStatus])

    const onOrderButtonPress = React.useCallback(() => {
        const validate = isOrderable(selectedLicensePlate, price)
        setErrors(validate.errors)
        if (!validate.valid) return
        action.order({
            userId: user.id,
            price: Number(price),
            agencyId: selectedAgencyId!,
            licensePlateId: selectedLicensePlate!,
            dateBooking: date,
            timeBooking: time
        })
    }, [selectedAgencyId, selectedLicensePlate, date, time, price])

    const agencyPickerData = React.useMemo((): KeyValuePair[] => {
        return agencies.map(x => ({ id: x.id, value: x.name }))
    }, [agencies])

    const licensePlatePickerData = React.useMemo((): KeyValuePair[] => {
        return licensePlates.map(x => ({ id: x.id, value: x.licensePlate }))
    }, [licensePlates])

    const renderDateTimePicker = React.useMemo(() => {
        return (
            <View style={BookingStyles.dateTimeContainer}>
                <DatePicker
                    onChangeValue={setDate}
                    defaltValue={date}
                    containerStyle={BookingStyles.picker}
                />
                <TimePicker
                    onChangeValue={setTime}
                    defaltValue={time}
                    containerStyle={BookingStyles.picker}
                />
            </View>
        )
    }, [date, time])

    const renderAdressPicker = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={BookingStyles.title}
                    text='Địa điểm'
                />
                <ValuePicker
                    onChangeValue={setAgencyId}
                    selectedId={selectedAgencyId}
                    title='Chọn địa điểm'
                    data={agencyPickerData}
                    containerStyle={BookingStyles.adressPicker}
                />
            </>
        )
    }, [agencyPickerData, selectedAgencyId])

    const renderLicensePlatePicker = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={BookingStyles.title}
                    text='Biển số'
                />
                <ValuePicker
                    onChangeValue={setSelectedLicensePlate}
                    selectedId={selectedLicensePlate}
                    title='Chọn biển số'
                    error={errors.plate}
                    data={licensePlatePickerData}
                    containerStyle={BookingStyles.licensePicker} />
            </>
        )
    }, [licensePlatePickerData, selectedLicensePlate])


    const renderPrice = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={BookingStyles.title}
                    text='Giá tiền'
                />
                <InputField
                    value={price}
                    error={errors.price}
                    onChangeText={setPrice}
                    inputContainerStyle={BookingStyles.priceInput}
                    dropContainerView
                />
            </>
        )
    }, [price, errors])

    return (
        <View style={BookingStyles.container}>
            <FetchStatusFullScreenIndicator trackStatuses={[getAgencyStatus, orderStatus, getLicensePlateStatus]} />
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Đặt lịch'
            />
            <LazyNavigationScreen indicatorType='NONE'>
                <KeyboardAwareScrollView contentContainerStyle={BookingStyles.content}>
                    <TextView
                        style={BookingStyles.title}
                        text='Đặt lịch của bạn tại đây'
                    />
                    {renderDateTimePicker}
                    <Divider style={BookingStyles.divider} />
                    {renderAdressPicker}
                    <Divider style={BookingStyles.divider} />
                    {renderLicensePlatePicker}
                    <View style={{ marginTop: responsiveHeight(3) }} />
                    {renderPrice}
                    <Button
                        onPress={onOrderButtonPress}
                        buttonStyle={{ height: SizeDimens.mdInput }}
                        containerStyle={BookingStyles.button}
                        title='Đặt lịch'
                    />
                </KeyboardAwareScrollView>
            </LazyNavigationScreen>
        </View>
    )
}
