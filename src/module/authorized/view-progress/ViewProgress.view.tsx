import React from 'react'
import { View, Text, ListRenderItemInfo } from 'react-native'
import moment from 'moment'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, DatePicker, TimePicker, TextView, ValuePicker, Button, InputField, FetchStatusFullScreenIndicator, KeyValuePair, InputFieldNumber } from '@component'
import { useViewProgress } from './ViewProgress.store'
import { ViewProgressProps } from './ViewProgress.type'
import { ViewProgressStyles } from './ViewProgress.style'
import { AssetIcons } from '@assets'
import { Divider } from 'react-native-elements'
import { SizeDimens } from '@res'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { useUser } from '@shared-state'
import { StringUtils } from '@util'
import { LazyNavigationScreen } from '@layout'

import Timeline from 'react-native-timeline-flatlist'
import { Progress } from '@data'
// import Timeline from 'react-native-just-timeline'

export const ViewProgress: React.FC<ViewProgressProps> = (props) => {
    const [{ progress }, action] = useViewProgress()
    const { idProgress } = props.route.params

    React.useEffect(() => {
        action.getProgress(idProgress)
        // console.log(idProgress)
        return action.reset
    }, [])

    // React.useEffect(() => {
    //     if (licensePlates[0]) {
    //         setSelectedLicensePlate(licensePlates[0].id)
    //     }
    // }, [licensePlates])

    // React.useEffect(() => {
    //     if (createStatus === 'SUCCESS') {
    //         props.navigation.navigate('Dashboard')
    //         action.resetProposal()
    //     }
    // }, [createStatus])

    const data = [
        { time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688', lineColor: '#009688' },
        { time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
        // {time: '12:00', title: 'Lunch', icon: require('../img/lunch.png')},
        { time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ', lineColor: '#009688' },
        { time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688' }
    ]

    // const renderView = React.useMemo(() => {
    //     return (
    //         time: item.date,
    //         title: item.awb,
    //         description: item.status
    //     )
    // }, [progress])

    const renderProgress = React.useCallback((progress: Progress) => () => {
        // console.log("aaa", item)
        console.log("progress")
        return {
            // time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688', lineColor: '#009688' 

                time: moment(progress.endDate).format('DD/MM/YYYY'),
                title: progress.progress,
                description: progress.note
    
            }
    }, [progress])

    return (
        <View style={ViewProgressStyles.container}>
            {/* <FetchStatusFullScreenIndicator trackStatuses={[createStatus]} /> */}
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Tiến trình đề nghị'
            />
            <LazyNavigationScreen indicatorType='NONE'>
                <KeyboardAwareScrollView contentContainerStyle={ViewProgressStyles.content}>
                    <Timeline
                        style={ViewProgressStyles.list}
                        data={renderProgress}
                        circleSize={20}
                        circleColor='rgb(45,156,219)'
                        lineColor='rgb(45,156,219)'
                        timeContainerStyle={{ minWidth: 52, marginTop: 0 }}
                        timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
                        descriptionStyle={{ color: 'gray' }}
                        options={{
                            style: { paddingTop: 5 }
                        }}
                        innerCircle={'dot'}
                    />
                </KeyboardAwareScrollView>
            </LazyNavigationScreen>
        </View>
    )
}
