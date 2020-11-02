import React, { useState } from 'react'
import { View, ImageBackground, TouchableOpacity, Image, Platform } from 'react-native'
import { Button, AppName, InputField, TextView, FetchStatusFullScreenIndicator } from '@component'
import { useSignUp } from './SignUp.store'
import { SignUpProps } from './SignUp.type'
import { SignUpStyles } from './SignUp.style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AssetBackground, AssetIcons, BannerAssets } from '@assets'
import { Colors, TextStyles } from '@res';
import { ProfileInfomationValidators } from '@util'
import { useUser } from '@shared-state'

type FormErrors = {
    name?: string,
    phone?: string,
    password?: string,
    confirmPassword?: string
    token?: string
}

const isVerifyable = (phone: string, name: string, password: string, confirmPassword: string) => {
    const errors = {
        phone: ProfileInfomationValidators.phone(phone) ? '' : 'Số điện thoại không đúng định dạng',
        name: ProfileInfomationValidators.name(name) ? '' : 'Tên là trường bắt buộc',
        password: ProfileInfomationValidators.password(password) ? '' : 'Mật khẩu phải lớn hơn hoặc bằng 6 kí tự',
        confirmPassword: confirmPassword === password ? '' : 'Không khớp với mật khẩu đã nhập'
    }
    const valid = !errors.phone && !errors.name && !errors.password && !errors.confirmPassword
    return { valid, errors }
}

const isRegistable = (phone: string, name: string, password: string, confirmPassword: string, token: string, verifyCode?: number) => {
    const vefifyable = isVerifyable(phone, name, password, confirmPassword)
    const errors = {
        ...vefifyable.errors,
        token: Number(token) === verifyCode ? '' : 'Mã xác thực không đúng'
    }
    const valid = vefifyable.valid && !errors.token
    return { valid, errors }
}

export const SignUp: React.FC<SignUpProps> = (props) => {
    const [state, action] = useSignUp()
    const [_, userAction] = useUser()

    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [token, setToken] = useState('')
    const [errors, setErrors] = useState<FormErrors>()
    const [buttonEnabled, setButtonEnalbed] = useState(true)

    const infoDeps = [phone, name, password, confirmPassword, token, state.verifyCode]
    React.useEffect(() => {
        return () => { action.reset() }
    }, [])

    React.useEffect(() => {
        if (state.user) {
            userAction.setUser(state.user)
        }
    }, [state.user])

    const onChangePhone = React.useCallback((text: string) => {
        const validate = isRegistable(text, name, password, confirmPassword, token, state.verifyCode)
        setPhone(text)
        action.reset()
        setErrors({ phone: validate.errors.phone })
    }, [])

    const onChangeName = React.useCallback((text: string) => {
        const validate = isRegistable(phone, text, password, confirmPassword, token, state.verifyCode)
        setName(text)
        setErrors({ name: validate.errors.name })
    }, [])

    const onChangePassword = React.useCallback((text: string) => {
        const validate = isRegistable(text, name, text, confirmPassword, token, state.verifyCode)
        setPassword(text)
        setErrors({ password: validate.errors.password })
    }, [])

    const onChangeConfirmPassword = React.useCallback((text: string) => {
        const validate = isRegistable(text, name, password, text, token, state.verifyCode)
        setConfirmPassword(text)
        setErrors({ confirmPassword: validate.errors.confirmPassword })
    }, [password])

    const onChangeToken = React.useCallback((text: string) => {
        const validate = isRegistable(text, name, password, confirmPassword, text, state.verifyCode)
        setToken(text)
        setErrors({ token: validate.errors.token })
    }, [state.verifyCode])

    const getVerifyToken = React.useCallback(() => {
        const validate = isVerifyable(phone, name, password, confirmPassword)
        setErrors(validate.errors)
        if (validate.valid) {
            action.getVerifyCode(phone)
        }
    }, infoDeps)

    const signUp = React.useCallback(() => {
        const validate = isRegistable(phone, name, password, confirmPassword, token, state.verifyCode)
        setErrors(validate.errors)
        if (validate.valid) {
            action.signUp(phone, name, password)
        }
    }, infoDeps)

    const renderHeader = React.useMemo(() => {
        return (
            <View style={SignUpStyles.header}>
                <TouchableOpacity onPress={props.navigation.goBack}>
                    <Image
                        source={AssetIcons.GRAY_LEFT_CHEV}
                    />
                </TouchableOpacity>
            </View>
        )
    }, [])

    const renderAppName = React.useMemo(() => {
        return (
            <AppName />
        )
    }, [])

    const renderToken = React.useMemo(() => {
        if (!state.verifyCode) return null
        return (
            <InputField
                containerStyle={SignUpStyles.input}
                value={token}
                error={errors?.token}
                onChangeText={onChangeToken}
                activeIcon={AssetIcons.BLUE_PASSWORD}
                defaultIcon={AssetIcons.GRAY_PASSWORD}
                inputProps={{
                    placeholder: 'Mã xác nhận'
                }}
            />
        )
    }, [state.verifyCode, token])

    const renderForm = React.useMemo(() => {
        return (
            <>
                <InputField
                    containerStyle={SignUpStyles.input}
                    value={phone}
                    error={errors?.phone}
                    onChangeText={onChangePhone}
                    activeIcon={AssetIcons.BLUE_PHONE}
                    defaultIcon={AssetIcons.GRAY_PHONE}
                    inputProps={{
                        placeholder: 'Key',
                        // keyboardType: 'phone-pad'
                    }}
                />

                <InputField
                    containerStyle={SignUpStyles.input}
                    value={password}
                    error={errors?.password}
                    onChangeText={onChangePassword}
                    activeIcon={AssetIcons.BLUE_PASSWORD}
                    defaultIcon={AssetIcons.GRAY_PASSWORD}
                    inputProps={{
                        placeholder: 'Mật khẩu',
                        secureTextEntry: true
                    }}
                />

                <InputField
                    containerStyle={SignUpStyles.input}
                    value={confirmPassword}
                    error={errors?.confirmPassword}
                    onChangeText={onChangeConfirmPassword}
                    activeIcon={AssetIcons.BLUE_PASSWORD}
                    defaultIcon={AssetIcons.GRAY_PASSWORD}
                    inputProps={{
                        placeholder: 'Nhập lại mật khẩu',
                        secureTextEntry: true
                    }}
                />

                {renderToken}
            </>
        )
    }, [phone, password, name, confirmPassword, state.verifyCode, token, errors])

    const renderButton = React.useMemo(() => {
        const title = state.verifyCode ? 'Đăng Ký' : 'Xác thực'
        const onPress = state.verifyCode ? signUp : getVerifyToken
        return (
            <Button
                disabled={!buttonEnabled}
                onPress={onPress}
                containerStyle={SignUpStyles.signUpButton}
                title={title}
            />
        )
    }, [...infoDeps, buttonEnabled])

    const renderFooter = React.useMemo(() => {
        return (
            <View style={SignUpStyles.footerContainer}>
                {renderButton}
                {/* <TextView
                    style={TextStyles.label}
                    text='Nếu có bất kì khó khăn gì vui lòng liên hệ hotline'
                />
                <TextView
                    style={SignUpStyles.hotline}
                    text='0123 456 789'
                    // text={state.verifyCode}
                /> */}
            </View>
        )
    }, [phone, state.verifyCode, errors])

    return (
        <ImageBackground
            style={SignUpStyles.container}
            source={AssetBackground.primary}
        >
            <FetchStatusFullScreenIndicator
                trackStatuses={[state.status]}
            />
            {renderHeader}
            <KeyboardAwareScrollView bounces={false}>
                <View style={SignUpStyles.content}>
                    {/* {renderAppName} */}
                    <Image
                        style={SignUpStyles.logo}
                        source={BannerAssets.LOGO}
                        resizeMode={Platform.select({
                            ios: 'cover',
                            android: 'stretch'
                        })}
                    />
                    <TextView
                        style={[SignUpStyles.title ,{ color: Colors.primaryGreen }]}
                        text='ĐĂNG KÝ'
                    />
                    {renderForm}
                    {renderFooter}
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>

    )
}
