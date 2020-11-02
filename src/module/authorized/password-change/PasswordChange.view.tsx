import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, InfomationAvatar, InputField, TextView, Button, FetchStatusFullScreenIndicator } from '@component'
import { usePersonalInfomation } from './PasswordChange.store'
import { PasswordChangeProps } from './PasswordChange.type'
import { PasswordChangeStyles } from './PasswordChange.style'
import { AssetIcons } from '@assets'
import { LazyNavigationScreen } from '@layout'
import { useUser } from '@shared-state'
import { PasswordChangeValidators } from '@util'
import { SizeDimens, FontSizeDimens } from '@res'

type FormErrors = {
    name?: string,
    phone?: string,
    password?: string,
    email?: string
}

const isUpdatable = (phone?: string, password?: string, name?: string, email?: string) => {
    const errors = {
        password: PasswordChangeValidators.password(password, true) ? '' : 'Mật khẩu phải lớn hơn hoặc bằng 6 kí tự',
    }
    const valid = !errors.password
    return { valid, errors }
}

export const PasswordChange: React.FC<PasswordChangeProps> = (props) => {
    const [state, action] = usePersonalInfomation()
    const [{ user, updateProfileStatus, getProfileStatus, removeUserFromStoreageStatus }, userAction] = useUser()

    const [name, setName] = useState(user?.name ?? '')
    const [email, setEmail] = useState(user?.email ?? '')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<FormErrors>()

    const onChangePassword = React.useCallback((text: string) => {
        const validate = isUpdatable(text, text, email)
        setPassword(text)
        setErrors({ password: validate.errors.password })
    }, [])

    const updateInfomation = React.useCallback(() => {
        const validate = isUpdatable(password, name, email)
        if (validate.valid) {
            userAction.updateProfile(name, email, password)
        }
    }, [name, email, password, errors])

    const renderInfomation = React.useMemo(() => {
        return (
            <View style={PasswordChangeStyles.component}>
                <InfomationAvatar
                    onChangeAvatar={userAction.updateAvatar}
                    avatar={{ uri: user?.avatar }}
                    name={user?.name}
                    email={user?.optionalEmail}
                    phoneNumber={user?.optionalPhone}
                />
            </View>
        )
    }, [user])

    const renderForm = React.useMemo(() => {
        return (
            <>
                <InputField
                    containerStyle={PasswordChangeStyles.component}
                    value={password}
                    error={errors?.password}
                    onChangeText={onChangePassword}
                    activeIcon={AssetIcons.BLUE_PASSWORD}
                    defaultIcon={AssetIcons.GRAY_PASSWORD}
                    inputProps={{
                        placeholder: 'Mật khẩu hiện tại',
                        secureTextEntry: true
                    }}
                />
                <InputField
                    containerStyle={PasswordChangeStyles.component}
                    value={password}
                    error={errors?.password}
                    onChangeText={onChangePassword}
                    activeIcon={AssetIcons.BLUE_PASSWORD}
                    defaultIcon={AssetIcons.GRAY_PASSWORD}
                    inputProps={{
                        placeholder: 'Mật khẩu mới',
                        secureTextEntry: true
                    }}
                />
            </>
        )
    }, [password, errors])

    return (
        <View style={PasswordChangeStyles.container}>
            <FetchStatusFullScreenIndicator trackStatuses={[updateProfileStatus, getProfileStatus, removeUserFromStoreageStatus]} />
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Thay đổi mật khẩu'
            />
            <LazyNavigationScreen>
                <KeyboardAwareScrollView
                    style={PasswordChangeStyles.content}
                    bounces={false}
                >
                    {renderInfomation}
                    {renderForm}
                    <Button
                        onPress={updateInfomation}
                        buttonStyle={{ height: SizeDimens.mdInput }}
                        containerStyle={PasswordChangeStyles.updateButton}
                        titleStyle={{ fontSize: FontSizeDimens.button }}
                        title='Lưu thay đổi'
                    />
                </KeyboardAwareScrollView>
            </LazyNavigationScreen>
        </View>
    )
}
