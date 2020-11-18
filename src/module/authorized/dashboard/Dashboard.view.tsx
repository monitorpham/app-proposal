import React, { useEffect } from 'react'
import { View, Image, Platform, StatusBar } from 'react-native'
import { Header, VIcon, FetchStatusFullScreenIndicator } from '@component'
import { useDashboard } from './Dashboard.store'
import { DashboardProps } from './Dashboard.type'
import { DashboardStyles } from './Dashboard.style'
import { AssetIcons, BannerAssets } from '@assets'
import { ScrollView } from 'react-native-gesture-handler'
import { LazyNavigationScreen } from '@layout'
import { useUser } from '@shared-state'

export const Dashboard: React.FC<DashboardProps> = (props) => {
    const [state, action] = useDashboard()
    const [user, userAction] = useUser()
    useEffect(() => {
        userAction.getProfile()
        return action.reset
    }, [])

    // const navigateToAgencyMap = React.useCallback(() => {
    //     props.navigation.navigate('AgencyMap')
    // }, [])

    const navigateToHistory = React.useCallback(() => {
        props.navigation.navigate('History')
    }, [])

    // const navigateToWallet = React.useCallback(() => {
    //     props.navigation.navigate('Wallet')
    // }, [])

    // const navigateToOrder = React.useCallback(() => {
    //     props.navigation.navigate('Order')
    // }, [])

    const renderBanner = React.useMemo(() => {
        return (
            <Image
                style={{ width: '100%' }}
                source={BannerAssets.HOME}
                resizeMode={Platform.select({
                    ios: 'cover',
                    android: 'stretch'
                })}
            />
        )
    }, [])

    const renderButtons = React.useMemo(() => {
        return (
            <View style={DashboardStyles.buttonsContainer}>
                <View style={DashboardStyles.borderBottomRow}>
                    <VIcon
                        // onPress={navigateToHistory}
                        cotainerStyle={{ flex: 1 }}
                        icon={AssetIcons.ORDER}
                        title='Hoàn thành'
                    />
                    {/* <VIcon
                        onPress={navigateToAgencyMap}
                        cotainerStyle={DashboardStyles.leftBorderButton}
                        icon={AssetIcons.REQUEST}
                        title='Đặt lịch'
                    /> */}
                    <VIcon
                        // onPress={navigateToHistory}
                        cotainerStyle={DashboardStyles.leftBorderButton}
                        icon={AssetIcons.HISTORY}
                        title='Đang xử lý'
                    />
                </View>
                {/* <View style={{ flexDirection: 'row', flex: 1 }}>
                    <VIcon
                        onPress={navigateToWallet}
                        cotainerStyle={{ flex: 1 }}
                        icon={AssetIcons.PAY}
                        title='Ví Tiền'
                    />
                    <VIcon
                        onPress={navigateToHistory}
                        cotainerStyle={DashboardStyles.leftBorderButton}
                        icon={AssetIcons.HISTORY}
                        title='Lịch sử'
                    />
                </View> */}
            </View>
        )
    }, [])

    return (
        <View style={DashboardStyles.container}>
            <StatusBar barStyle='light-content' />
            <FetchStatusFullScreenIndicator trackStatuses={[user.getProfileStatus]} />
            <Header
                title='Trang chủ'
            />
            <LazyNavigationScreen indicatorType='NONE'>
                <ScrollView
                    bounces={false}
                    style={DashboardStyles.content}
                >
                    {/* {renderBanner} */}
                    {/* <Wallet containerStyle={DashboardStyles.wallet} /> */}
                    {renderButtons}
                </ScrollView>
            </LazyNavigationScreen>
        </View>
    )
}
