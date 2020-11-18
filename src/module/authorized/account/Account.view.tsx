import React from 'react'
import { View, Platform } from 'react-native'
import Share from 'react-native-share'
import { Header, InfomationAvatar, RoundButton, TextView } from '@component'
import { useAccount } from './Account.store'
import { AccountProps } from './Account.type'
import { AccountStyles } from './Account.style'
import { AssetIcons } from '@assets'
import { ScrollView } from 'react-native-gesture-handler'
import { LazyNavigationScreen } from '@layout'
import { useUser } from '@shared-state'

export const Account: React.FC<AccountProps> = (props) => {
    const [state, action] = useAccount()
    const [{ user }, userAction] = useUser()

    const signOut = React.useCallback(() => {
        userAction.signOut()
    }, [])

    const navigateToPersonalInfomation = React.useCallback(() => {
        props.navigation.navigate('PersonalInfomation')
    }, [])

    // const navigateToNotification = React.useCallback(() => {
    //     props.navigation.navigate('Notification')
    // }, [])

    const navigateToPasswordChange = React.useCallback(() => {
        props.navigation.navigate('PasswordChange')
    }, [])

    // const openSharing = React.useCallback(() => {
    //     const url = 'https://awesome.contents.com/';
    //     const title = 'Awesome Contents';
    //     const message = 'Please check this out.';
    //     const options = Platform.select({
    //         ios: {
    //             activityItemSources: [
    //                 {
    //                     placeholderItem: { type: 'url', content: url },
    //                     item: {
    //                         default: { type: 'url', content: url },
    //                     },
    //                     subject: {
    //                         default: title,
    //                     },
    //                     linkMetadata: { originalUrl: url, url, title },
    //                 },
    //                 {
    //                     placeholderItem: { type: 'text', content: message },
    //                     item: {
    //                         default: { type: 'text', content: message },
    //                         message: null, // Specify no text to share via Messages app.
    //                     },
    //                 },
    //             ],
    //         },
    //         default: {
    //             title,
    //             subject: title,
    //             message: `${message} ${url}`,
    //         },
    //     });

    //     Share.open(options);
    // }, [])


    // const renderAccount = React.useMemo(() => {
    //     return (
    //         <InfomationAvatar
    //             onChangeAvatar={userAction.updateAvatar}
    //             avatar={{ uri: user?.avatar }}
    //             name={user?.name}
    //             email={user?.optionalEmail}
    //             phoneNumber={user?.optionalPhone}
    //         />
    //     )
    // }, [user])

    const renderForm = React.useMemo(() => {
        return (
            <ScrollView
                style={AccountStyles.buttonContainer}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <RoundButton
                    onPress={navigateToPersonalInfomation}
                    containerStyle={AccountStyles.buttonDirection}
                    title='Thông tin cá nhân'
                    rightIcon={AssetIcons.BLUE_RIGHT_CHEV}
                />
                <RoundButton
                    onPress={navigateToPasswordChange}
                    containerStyle={AccountStyles.buttonDirection}
                    title='Thay đổi mật khẩu'
                    rightIcon={AssetIcons.BLUE_RIGHT_CHEV}
                />
                <RoundButton
                    onPress={signOut}
                    containerStyle={AccountStyles.buttonDirection}
                    title='Đăng xuất'
                    rightIcon={AssetIcons.BLUE_RIGHT_CHEV}
                />
                {/* <RoundButton
                    containerStyle={AccountStyles.buttonDirection}
                    title='Phản hồi'
                    rightIcon={AssetIcons.BLUE_RIGHT_CHEV}
                />
                <RoundButton
                    onPress={navigateToNotification}
                    containerStyle={AccountStyles.buttonDirection}
                    title='Thông báo'
                    rightIcon={AssetIcons.BLUE_RIGHT_CHEV}
                />
                <RoundButton
                    containerStyle={AccountStyles.buttonDirection}
                    title='Đánh giá'
                    rightIcon={AssetIcons.BLUE_RIGHT_CHEV}
                />
                <RoundButton
                    containerStyle={AccountStyles.buttonDirection}
                    title='Hướng dẫn'
                    rightIcon={AssetIcons.BLUE_RIGHT_CHEV}
                />
                <RoundButton
                    onPress={openSharing}
                    containerStyle={AccountStyles.buttonDirection}
                    title='Chia sẻ'
                    rightIcon={AssetIcons.BLUE_RIGHT_CHEV}
                /> */}
            </ScrollView>
        )
    }, [])

    return (
        <View style={AccountStyles.container}>
            <Header
                title='Cá nhân'
            />
            <View style={AccountStyles.content}>
                {/* {renderAccount} */}
                <LazyNavigationScreen>
                    {renderForm}
                </LazyNavigationScreen>
            </View>
        </View>
    )
}
