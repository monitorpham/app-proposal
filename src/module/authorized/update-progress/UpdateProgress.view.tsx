import React from 'react'
import { View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, DatePicker, TimePicker, TextView, ValuePicker, Button, InputField, FetchStatusFullScreenIndicator, KeyValuePair, InputFieldNumber } from '@component'
import { useUpdateProgress } from './UpdateProgress.store'
import { UpdateProgressProps } from './UpdateProgress.type'
import { UpdateProgressStyles } from './UpdateProgress.style'
import { AssetIcons } from '@assets'
import { Divider } from 'react-native-elements'
import { SizeDimens } from '@res'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { useUser } from '@shared-state'
import { StringUtils } from '@util'
import { LazyNavigationScreen } from '@layout'

export const UpdateProgress: React.FC<UpdateProgressProps> = (props) => {
    const [{ hospitalDepartment, userList, createStatus, }, action] = useUpdateProgress()
    const [{ user, }] = useUser()
    if (!user) return null

    React.useEffect(() => {
        // action.getUserList()
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



    return (
        <View style={UpdateProgressStyles.container}>
            <FetchStatusFullScreenIndicator trackStatuses={[createStatus]} />
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Cập nhật đề nghị'
            />
            <LazyNavigationScreen indicatorType='NONE'>
                <KeyboardAwareScrollView contentContainerStyle={UpdateProgressStyles.content}>
                    <TextView
                        style={UpdateProgressStyles.title}
                        text='Ngày đề nghị'
                    />
                    
                    <Button
                        // onPress={onOrderButtonPress}
                        buttonStyle={{ height: SizeDimens.mdInput }}
                        containerStyle={UpdateProgressStyles.button}
                        title='Lưu'
                    />
                </KeyboardAwareScrollView>
            </LazyNavigationScreen>
        </View>
    )
}
