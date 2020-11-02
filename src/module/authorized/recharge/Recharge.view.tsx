import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, TextView, InputField, Button } from '@component'
import { useRecharge } from './Recharge.store'
import { RechargeProps } from './Recharge.type'
import { RechargeStyles } from './Recharge.style'
import { AssetIcons } from '@assets'
import { RoundedButton } from './RoundedButton'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { SizeDimens } from '@res'

export const Recharge: React.FC<RechargeProps> = (props) => {
    const [state, action] = useRecharge()
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const quickSetAmount = React.useCallback((value: number) => () => {
        setAmount(value.toString())
    }, [])

    const renderAmountForm = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={RechargeStyles.title}
                    text='Nhập số tiền'
                />

                <View style={RechargeStyles.quickAmountContainer}>
                    <RoundedButton
                        onPress={quickSetAmount(20000)}
                        title='20.000đ'
                    />
                    <RoundedButton
                        onPress={quickSetAmount(100000)}
                        title='100.000đ'
                    />
                    <RoundedButton
                        onPress={quickSetAmount(200000)}
                        title='200.000đ' />
                </View>
                <InputField
                    inputContainerStyle={RechargeStyles.amountInput}
                    value={amount}
                    onChangeText={setAmount}
                    inputProps={{
                        maxLength: 9,
                        placeholder: 'Nhập số tiền',
                        keyboardType: 'number-pad',
                        inputStyle: {
                            textAlign: 'center'
                        }
                    }}
                    dropContainerView
                />
            </>
        )
    }, [amount])

    const renderDescriptionForm = React.useMemo(() => {
        return (
            <>
                <TextView
                    style={RechargeStyles.title}
                    text='Nhập nội dung thanh toán'
                />
                <InputField
                    inputContainerStyle={RechargeStyles.contentInput}
                    value={description}
                    onChangeText={setDescription}
                    contentStyle={{ justifyContent: 'flex-start', paddingRight: 12, paddingTop: 8 }}
                    inputProps={{
                        placeholder: 'Nội dung thanh toán',
                        multiline: true,
                        textAlignVertical: 'top'
                    }}
                    dropContainerView
                />
            </>
        )
    }, [description])

    return (
        <View style={RechargeStyles.container}>
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Nạp tiền'
            />
            <KeyboardAwareScrollView
                contentContainerStyle={RechargeStyles.content}
                bounces={false}
            >
                {renderAmountForm}
                <View style={RechargeStyles.divider} />
                {renderDescriptionForm}
                <Button
                    buttonStyle={{ height: SizeDimens.mdInput }}
                    containerStyle={RechargeStyles.continueButton}
                    title='Tiếp tục'
                />
            </KeyboardAwareScrollView>
        </View>
    )
}
