import React from 'react'
import { View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, DatePicker, TimePicker, TextView, ValuePicker, Button, InputField, FetchStatusFullScreenIndicator, KeyValuePair, InputFieldNumber } from '@component'
import { useAdding } from './Adding.store'
import { AddingProps } from './Adding.type'
import { AddingStyles } from './Adding.style'
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

// const isOrderable = (plateId?: string, price?: string) => {
//     const errors = {
//         plate: plateId ? '' : 'Chưa chọn biển số',
//         price: Number(price) < 10000 ? `Mệnh giá nhỏ nhất là ${StringUtils.currenry(10000)}` : ''
//     }
//     const valid = !errors.plate && !errors.price
//     return { valid, errors }
// }

export const Adding: React.FC<AddingProps> = (props) => {
    const [{ hospitalDepartment, userList, createStatus, }, action] = useAdding()
    const [{ user, }] = useUser()
    if (!user) return null

    // const { agencyId } = props.route.params

    const [content, setContent] = React.useState('')
    const [addDate, setAddDate] = React.useState('0')
    const [selectedDeparmentId, setDepartmentId] = React.useState<string>()
    const [selectedUserListId, setUserListId] = React.useState<string>()
    // const [selectedLicensePlate, setSelectedLicensePlate] = React.useState<string>()
    // const [selectedId, setSelectedLicensePlate] = React.useState<string>()
    // const [time, setTime] = React.useState(new Date())
    const [date, setDate] = React.useState(new Date())
    const [errors, setErrors] = React.useState<FormErrors>({})

    React.useEffect(() => {
        action.getHospitalDepartment()
        action.getUserList()
        return action.reset
    }, [])

    // React.useEffect(() => {
    //     if (licensePlates[0]) {
    //         setSelectedLicensePlate(licensePlates[0].id)
    //     }
    // }, [licensePlates])

    React.useEffect(() => {
        if (createStatus === 'SUCCESS') {
            props.navigation.navigate('Dashboard')
            action.resetProposal()
        }
    }, [createStatus])

    const onOrderButtonPress = React.useCallback(() => {
        // const validate = isOrderable(selectedLicensePlate, price)
        // setErrors(validate.errors)
        // if (!validate.valid) return
        action.createProposal({
            // userExId: selectedId!,
            // price: Number(price),
            hosDepId: selectedDeparmentId!,
            userListId: selectedUserListId!,
            // licensePlateId: selectedLicensePlate!,
            dateAdding: date,
            additionalDate : Number(addDate),
            content: String(content)
            // timeBooking: time
        })
    }, [selectedDeparmentId,selectedUserListId, date,addDate,content])

    const hospitalDepartmentPickerData = React.useMemo((): KeyValuePair[] => {
        return hospitalDepartment.map(x => ({ id: x.id, value: x.hospitalDepartmentName }))
    }, [hospitalDepartment])

    const userListPickerData = React.useMemo((): KeyValuePair[] => {
        return userList.map(x => ({ id: x.id, value: x.id + ' - ' + x.firstName }))
    }, [userList])

    const renderDateTimePicker = React.useMemo(() => {
        return (
            <View style={AddingStyles.dateTimeContainer}>
                <DatePicker
                    onChangeValue={setDate}
                    defaltValue={date}
                    containerStyle={AddingStyles.picker}
                />
            </View>
        )
    }, [date])

    const renderHPPicker = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={AddingStyles.title}
                    text='Khoa đề nghị'
                />
                <ValuePicker
                    onChangeValue={setDepartmentId}
                    selectedId={selectedDeparmentId}
                    title='Khoa đề nghị'
                    data={hospitalDepartmentPickerData}
                    containerStyle={AddingStyles.adressPicker}
                />
            </>
        )
    }, [hospitalDepartmentPickerData, selectedDeparmentId])

    const renderUserExtraPicker = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={AddingStyles.title}
                    text='Người nhận đề nghị'
                />
                <ValuePicker
                    onChangeValue={setUserListId}
                    selectedId={selectedUserListId}
                    title='Người nhận'
                    data={userListPickerData}
                    containerStyle={AddingStyles.adressPicker}
                />
            </>
        )
    }, [userListPickerData, selectedUserListId])

    const renderContent = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={AddingStyles.title}
                    text='Nội dung đề nghị'
                />
                <InputField
                    value={content}
                    // error={errors.price}
                    onChangeText={setContent}
                    inputContainerStyle={AddingStyles.contentInput}
                // dropContainerView
                />
            </>
        )
    }, [content])

    const renderAddDate = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={AddingStyles.title}
                    text='Thêm ngày đề nghị'
                />
                <InputFieldNumber
                    value={addDate}
                    // error={errors.price}
                    onChangeText={setAddDate}
                    inputContainerStyle={AddingStyles.addDateInput}
                // dropContainerView
                />
            </>
        )
    }, [addDate])

    return (
        <View style={AddingStyles.container}>
            <FetchStatusFullScreenIndicator trackStatuses={[createStatus]} />
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Thêm đề nghị'
            />
            <LazyNavigationScreen indicatorType='NONE'>
                <KeyboardAwareScrollView contentContainerStyle={AddingStyles.content}>
                    <TextView
                        style={AddingStyles.title}
                        text='Ngày đề nghị'
                    />
                    {renderDateTimePicker}
                    <Divider style={AddingStyles.divider} />
                    {renderHPPicker}
                    <Divider style={AddingStyles.divider} />
                    {renderUserExtraPicker}
                    {/* <View style={{ marginTop: responsiveHeight(3) }} /> */}
                    <Divider style={AddingStyles.divider} />
                    {renderContent}
                    <Divider style={AddingStyles.divider} />
                    {renderAddDate}
                    <Button
                        onPress={onOrderButtonPress}
                        buttonStyle={{ height: SizeDimens.mdInput }}
                        containerStyle={AddingStyles.button}
                        title='Lưu'
                    />
                </KeyboardAwareScrollView>
            </LazyNavigationScreen>
        </View>
    )
}
