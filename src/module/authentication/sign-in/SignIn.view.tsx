import React, { useState } from 'react'
import { View, ImageBackground, Text, Platform, Image } from 'react-native'
import { Button as EButton } from 'react-native-elements'
import { Button, AppName, InputField, TextView, FetchStatusFullScreenIndicator } from '@component'
import { useSignIn } from './SignIn.store'
import { SignInProps } from './SignIn.type'
import { SignInStyles } from './SignIn.style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AssetBackground, AssetIcons, BannerAssets } from '@assets'
import { Colors, TextStyles, SizeDimens } from '@res';
import { useUser } from '@shared-state'

export const SignIn: React.FC<SignInProps> = (props) => {
    const [state, action] = useSignIn()
    const [_, userAction] = useUser()

    const [username, setUsername] = useState('admin')
    const [password, setPassword] = useState('123456')
    React.useEffect(() => {
        return action.reset
    }, [])

    React.useEffect(() => {
        if (state.user) {
            userAction.setUser(state.user)
            console.log(state.user)
        }
    }, [state.user])

    const signIn = React.useCallback(() => {
        action.signIn(username, password)
    }, [username, password])

    // const goToSignUp = React.useCallback(() => {
    //     props.navigation.navigate('SignUp')
    // }, [])

    // const goForgotPassword = React.useCallback(() => {
    //     props.navigation.navigate('ForgotPassword')
    // }, [])

    const renderAppName = React.useMemo(() => {
        return (
            <AppName />
        )
    }, [])

    const renderForm = React.useMemo(() => {
        return (
            <>
                <InputField
                    value={username}
                    onChangeText={setUsername}
                    activeIcon={AssetIcons.BLUE_ACCOUNT}
                    defaultIcon={AssetIcons.GRAY_ACCOUNT}
                    inputProps={{
                        placeholder: 'Tài khoản'
                    }}
                />

                <InputField
                    containerStyle={{ marginTop: 16 }}
                    value={password}
                    onChangeText={setPassword}
                    activeIcon={AssetIcons.BLUE_PASSWORD}
                    defaultIcon={AssetIcons.GRAY_PASSWORD}
                    inputProps={{
                        placeholder: 'Mật khẩu',
                        secureTextEntry: true
                    }}
                />
            </>
        )
    }, [username, password])

    const renderSocialButton = React.useMemo(() => {
        return (
            <View style={SignInStyles.socialButtonContainer}>
                {/* <EButton
                    containerStyle={SignInStyles.socialButton}
                    type='clear'
                    icon={<Image source={AssetIcons.FACEBOOK} />}
                    buttonStyle={{ backgroundColor: Colors.primaryBlue, height: responsiveHeight(5) }}
                    titleStyle={SignInStyles.socialTitle}
                    title='Facebook'
                /> */}
                {/* <EButton
                    onPress={googleAuth}
                    containerStyle={SignInStyles.socialButton}
                    type='clear'
                    icon={<Image source={AssetIcons.GOOGLE} />}
                    buttonStyle={{ backgroundColor: Colors.primaryRed, height: SizeDimens.mdInput }}
                    titleStyle={SignInStyles.socialTitle}
                    title='Google'
                /> */}
            </View>
        )
    }, [])

    const renderFooter = React.useMemo(() => {
        return (
            <View style={SignInStyles.footerContainer}>
                {/* <TextView
                    onPress={goForgotPassword}
                    style={SignInStyles.forgotPasswordLink}
                    text='Quên mật khẩu'
                /> */}
                <Button
                    onPress={signIn}
                    containerStyle={SignInStyles.signInButton}
                    title='Đăng nhập'
                />
                <TextView
                    style={TextStyles.label}
                    text='Xác thực tài khoản mới'
                >
                    <TextView
                        // onPress={goToSignUp}
                        style={SignInStyles.signUpLink}
                        text=' tại đây'
                    ></TextView>
                </TextView>
                {renderSocialButton}
                {/* <TextView
                    style={TextStyles.label}
                    text='Nếu có bất kì khó khăn gì vui lòng liên hệ hotline'
                />
                <TextView
                    style={SignInStyles.hotline}
                    text='0123 456 789'
                /> */}
            </View>
        )
    }, [username, password])

    return (
        <ImageBackground
            style={SignInStyles.container}
            source={AssetBackground.primary}
        >
            <FetchStatusFullScreenIndicator
                trackStatuses={[state.status]}
            />
            <KeyboardAwareScrollView bounces={false}>
                <View style={SignInStyles.content}>
                    {renderAppName}
                    <Image
                        style={SignInStyles.logo}
                        source={BannerAssets.LOGO}
                        resizeMode={Platform.select({
                            ios: 'cover',
                            android: 'stretch'
                        })}
                    />
                    <TextView
                        style={[SignInStyles.title, { color: Colors.primaryGreen }]}
                        text=''
                    />
                    {renderForm}
                    {renderFooter}
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>

    )
}
