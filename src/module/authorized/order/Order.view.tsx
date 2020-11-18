import React from 'react'
import { View, Text, Image } from 'react-native'
import { Header, KeyValueText, Button, FetchStatusFullScreenIndicator } from '@component'
import { useOrder } from './Order.store'
import { OrderProps } from './Order.type'
import { OrderStyles } from './Order.style'
import { AssetIcons, BannerAssets } from '@assets'
import { Divider, ButtonGroup } from 'react-native-elements'
// import { PaymentTypeSelector } from './PaymentTypeSelector'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { SizeDimens } from '@res'
import { LazyNavigationScreen } from '@layout'
import { useUser } from '@shared-state'
import { StringUtils } from '@util'

export const Order: React.FC<OrderProps> = (props) => {
    const [{ order, status }, action] = useOrder()
    const [{ user }] = useUser()
    const { orderId } = props.route.params
    if (!user) return null
    React.useEffect(() => {
        action.getOrder(user?.id, orderId)
        return action.reset
    }, [])
    const renderInfomation = React.useMemo(() => {
        return (
            <>
                {/* <KeyValueText
                    title='Tên khách hàng : '
                    value={user?.name}
                />
                <KeyValueText
                    containerStyle={OrderStyles.keyValue}
                    title='Số điện thoại : '
                    value={user?.optionalPhone}
                /> */}
                <KeyValueText
                    containerStyle={OrderStyles.keyValue}
                    title='Địa chỉ : '
                    value={order?.address}
                />
                <KeyValueText
                    containerStyle={OrderStyles.keyValue}
                    title='Biển số : '
                    value={order?.licensePlate}
                />
                <KeyValueText
                    containerStyle={OrderStyles.keyValue}
                    title='Giá tiền : '
                    value={StringUtils.currenry(order?.price ?? 0)}
                />
            </>
        )
    }, [user, order])
    return (
        <View style={OrderStyles.container}>
            <FetchStatusFullScreenIndicator trackStatuses={[status]} />
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Đơn hàng'
            />
            <LazyNavigationScreen indicatorType='NONE'>
                <View style={OrderStyles.content}>
                    <Image
                        style={{ width: '100%' }}
                        source={BannerAssets.ORDER}
                    />
                    <Divider style={OrderStyles.divider} />
                    {renderInfomation}
                    {/* <PaymentTypeSelector
                        containerStyle={OrderStyles.paymentType}
                    /> */}
                    <Button
                        buttonStyle={{ height: SizeDimens.mdInput }}
                        containerStyle={OrderStyles.button}
                        title='Thanh toán'
                    />
                </View>
            </LazyNavigationScreen>
        </View>
    )
}
