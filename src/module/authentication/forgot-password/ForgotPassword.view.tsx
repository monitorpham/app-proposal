import React, { useState } from 'react'
import { View, ImageBackground, Text, Image } from 'react-native'
import { Button as EButton } from 'react-native-elements'
import { Button, AppName, InputField, TextView, FetchStatusFullScreenIndicator } from '@component'
import { useForgotPassword } from './ForgotPassword.store'
import { ForgotPasswordProps } from './ForgotPassword.type'
import { ForgotPasswordStyles } from './ForgotPassword.style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AssetBackground, AssetIcons } from '@assets'
import { Colors, TextStyles } from '@res';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ProfileInfomationValidators } from '@util'

type FormErrors = {
    phone?: string,
    password?: string,
    confirmPassword?: string
    token?: string
}


const isVerifyable = (phone: string, password: string, confirmPassword: string) => {
    const errors = {
        phone: ProfileInfomationValidators.phone(phone) ? '' : 'Số điện thoại không đúng định dạng',
        password: ProfileInfomationValidators.password(password) ? '' : 'Mật khẩu phải lớn hơn hoặc bằng 6 kí tự',
        confirmPassword: confirmPassword === password ? '' : 'Không khớp với mật khẩu đã nhập'
    }
    const valid = !errors.phone && !errors.password && !errors.confirmPassword
    return { valid, errors }
}

const isUpdatable = (phone: string, password: string, confirmPassword: string, token: string, verifyCode?: number) => {
    const vefifyable = isVerifyable(phone, password, confirmPassword)
    const errors = {
        ...vefifyable.errors,
        token: Number(token) === verifyCode ? '' : 'Mã xác thực không đúng'
    }
    const valid = vefifyable.valid && !errors.token
    return { valid, errors }
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => {
    const [state, action] = useForgotPassword()

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [token, setToken] = useState('')
    const [errors, setErrors] = useState<FormErrors>()
    const infoDeps = [phone, password, confirmPassword, token, state.verifyCode]

    React.useEffect(() => {
        return action.reset
    }, [])

    React.useEffect(() => {
        if (state.status === 'SUCCESS') {
            props.navigation.pop()
        }
    }, [state.status])

    const onChangePhone = React.useCallback((text: string) => {
        const validate = isUpdatable(text, password, confirmPassword, token, state.verifyCode)
        setPhone(text)
        action.reset()
        setErrors({ phone: validate.errors.phone })
    }, [])


    const onChangePassword = React.useCallback((text: string) => {
        const validate = isUpdatable(text, text, confirmPassword, token, state.verifyCode)
        setPassword(text)
        setErrors({ password: validate.errors.password })
    }, [])

    const onChangeConfirmPassword = React.useCallback((text: string) => {
        const validate = isUpdatable(text, password, text, token, state.verifyCode)
        setConfirmPassword(text)
        setErrors({ confirmPassword: validate.errors.confirmPassword })
    }, [password])

    const onChangeToken = React.useCallback((text: string) => {
        const validate = isUpdatable(text, password, confirmPassword, text, state.verifyCode)
        setToken(text)
        setErrors({ token: validate.errors.token })
    }, [state.verifyCode])

    const getVerifyToken = React.useCallback(() => {
        const validate = isVerifyable(phone, password, confirmPassword)
        setErrors(validate.errors)
        if (validate.valid) {
            action.getVerifyCode(phone)
        }
    }, infoDeps)

    const forgotPassword = React.useCallback(() => {
        const validate = isUpdatable(phone, password, confirmPassword, token, state.verifyCode)
        setErrors(validate.errors)
        if (validate.valid) {
            action.updatePassword(phone, password)
        }
    }, infoDeps)

    const renderHeader = React.useMemo(() => {
        return (
            <View style={ForgotPasswordStyles.header}>
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
                containerStyle={ForgotPasswordStyles.input}
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
                    value={phone}
                    onChangeText={onChangePhone}
                    error={errors?.phone}
                    activeIcon={AssetIcons.BLUE_PHONE}
                    defaultIcon={AssetIcons.GRAY_PHONE}
                    inputProps={{
                        placeholder: 'Số điện thoại'
                    }}
                />

                <InputField
                    containerStyle={ForgotPasswordStyles.input}
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
                    containerStyle={ForgotPasswordStyles.input}
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
    }, infoDeps)

    const renderButton = React.useMemo(() => {
        const title = state.verifyCode ? 'Tiếp tục' : 'Xác thực'
        const onPress = state.verifyCode ? forgotPassword : getVerifyToken
        return (
            <Button
                onPress={onPress}
                containerStyle={ForgotPasswordStyles.button}
                title={title}
            />
        )
    }, [...infoDeps])
    const renderFooter = React.useMemo(() => {
        return (
            <View style={ForgotPasswordStyles.footerContainer}>
                {renderButton}
                <TextView
                    style={TextStyles.label}
                    text='Nếu có bất kì khó khăn gì vui lòng liên hệ hotline'
                />
                <TextView
                    style={ForgotPasswordStyles.hotline}
                    text='0123 456 789'
                />
            </View>
        )
    }, [infoDeps])

    return (
        <ImageBackground
            style={ForgotPasswordStyles.container}
            source={AssetBackground.primary}
        >
            <FetchStatusFullScreenIndicator
                trackStatuses={[state.status, state.getVerifyCodeStatus]}
            />
            {renderHeader}
            <KeyboardAwareScrollView bounces={false}>
                <View style={ForgotPasswordStyles.content}>
                    {renderAppName}
                    <TextView
                        style={ForgotPasswordStyles.title}
                        text='Tạo mật khẩu mới'
                    />
                    {renderForm}
                    {renderFooter}
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>

    )
}
