import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, InfomationAvatar, InputField, TextView, Button, FetchStatusFullScreenIndicator } from '@component'
import { usePersonalInfomation } from './PersonalInfomation.store'
import { PersonalInfomationProps } from './PersonalInfomation.type'
import { PersonalInfomationStyles } from './PersonalInfomation.style'
import { AssetIcons } from '@assets'
import { LazyNavigationScreen } from '@layout'
import { useUser } from '@shared-state'
import { ProfileInfomationValidators } from '@util'
import { SizeDimens, FontSizeDimens } from '@res'

type FormErrors = {
    name?: string,
    phone?: string,
    password?: string,
    email?: string
}

const isUpdatable = (phone?: string, password?: string, name?: string, email?: string) => {
    const errors = {
        phone: ProfileInfomationValidators.phone(phone) ? '' : 'Số điện thoại không đúng định dạng',
        password: ProfileInfomationValidators.password(password, true) ? '' : 'Mật khẩu phải lớn hơn hoặc bằng 6 kí tự',
        name: ProfileInfomationValidators.name(name) ? '' : 'Tên là trường bắt buộc',
        email: ProfileInfomationValidators.email(email ?? '') ? '' : 'Email không đúng định dạng',
    }
    const valid = !errors.password && !errors.name && !errors.email
    return { valid, errors }
}

export const PersonalInfomation: React.FC<PersonalInfomationProps> = (props) => {
    const [state, action] = usePersonalInfomation()
    const [{ user, updateProfileStatus, getProfileStatus, removeUserFromStoreageStatus }, userAction] = useUser()

    const [phone, setPhone] = useState(user?.phone ?? '')
    const [name, setName] = useState(user?.name ?? '')
    const [email, setEmail] = useState(user?.email ?? '')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<FormErrors>()

    const onChangePhone = React.useCallback((text: string) => {
        const validate = isUpdatable(text, name, password, email)
        setPhone(text)
        action.reset()
        setErrors({ phone: validate.errors.phone })
    }, [])

    const onChangeName = React.useCallback((text: string) => {
        const validate = isUpdatable(phone, text, text, email)
        setName(text)
        setErrors({ name: validate.errors.name })
    }, [])

    const onChangePassword = React.useCallback((text: string) => {
        const validate = isUpdatable(phone, text, text, email)
        setPassword(text)
        setErrors({ password: validate.errors.password })
    }, [])

    const onChangeEmail = React.useCallback((text: string) => {
        const validate = isUpdatable(phone, name, text, text)
        setEmail(text)
        setErrors({ email: validate.errors.email })
    }, [])

    const updateInfomation = React.useCallback(() => {
        const validate = isUpdatable(phone, password, name, email)
        setErrors({ email: validate.errors.email })
        if (validate.valid) {
            userAction.updateProfile(name, email, password)
        }
    }, [phone, name, email, password, errors])

    const renderInfomation = React.useMemo(() => {
        return (
            <View style={PersonalInfomationStyles.component}>
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
                    containerStyle={PersonalInfomationStyles.component}
                    value={name}
                    error={errors?.name}
                    onChangeText={onChangeName}
                    activeIcon={AssetIcons.BLUE_ACCOUNT}
                    defaultIcon={AssetIcons.GRAY_ACCOUNT}
                    inputProps={{
                        placeholder: 'Tên đăng nhập'
                    }}
                />

                <InputField
                    containerStyle={PersonalInfomationStyles.component}
                    value={phone}
                    error={errors?.phone}
                    onChangeText={onChangePhone}
                    activeIcon={AssetIcons.BLUE_PHONE}
                    defaultIcon={AssetIcons.GRAY_PHONE}
                    inputProps={{
                        placeholder: 'Số điện thoại',
                        disabled: true
                    }}
                />

                <InputField
                    containerStyle={PersonalInfomationStyles.component}
                    value={email}
                    onChangeText={onChangeEmail}
                    error={errors?.email}
                    activeIcon={AssetIcons.BLUE_EMAIL}
                    defaultIcon={AssetIcons.GRAY_EMAIL}
                    inputProps={{
                        placeholder: 'Email'
                    }}
                />

                <InputField
                    containerStyle={PersonalInfomationStyles.component}
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
            </>
        )
    }, [phone, name, email, password, errors])

    return (
        <View style={PersonalInfomationStyles.container}>
            <FetchStatusFullScreenIndicator trackStatuses={[updateProfileStatus, getProfileStatus, removeUserFromStoreageStatus]} />
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Thông tin cá nhân'
            />
            <LazyNavigationScreen>
                <KeyboardAwareScrollView
                    style={PersonalInfomationStyles.content}
                    bounces={false}
                >
                    {renderInfomation}
                    {renderForm}
                    <Button
                        onPress={updateInfomation}
                        buttonStyle={{ height: SizeDimens.mdInput }}
                        containerStyle={PersonalInfomationStyles.updateButton}
                        titleStyle={{fontSize: FontSizeDimens.button}}
                        title='Lưu thay đổi'
                    />
                </KeyboardAwareScrollView>
            </LazyNavigationScreen>
        </View>
    )
}
