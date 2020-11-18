import React from 'react'
import { View, Text, ListRenderItemInfo } from 'react-native'
import { Header, ListView } from '@component'
import { useHistory } from './History.store'
import { HistoryProps } from './History.type'
import { HistoryStyles } from './History.style'
import { AssetIcons } from '@assets'
import { HistoryItem } from './HistoryItem'
import { LazyNavigationScreen } from '@layout'
import { Order } from '@data'
import { useUser } from '@shared-state'

export const History: React.FC<HistoryProps> = (props) => {
    const [{ refreshStatus, orders }, action] = useHistory()
    const [{ user }] = useUser()
    React.useEffect(() => {
        if (!user) return
        action.getOrderHistory(user.id)
    }, [])

    const onRefresh = React.useCallback(() => {
        if (!user) return
        action.getOrderHistory(user.id)
    }, [])

    // const onItemPress = React.useCallback((order: Order) => () => {
    //     props.navigation.navigate('Order', { orderId: order.id })
    // }, [])

    const renderItem = React.useCallback(({ item }: ListRenderItemInfo<Order>) => {
        return (
            <HistoryItem
                order={item}
                // onPress={onItemPress(item)}
            />
        )
    }, [])

    const keyExtractor = React.useCallback((item: Order) => item.id, [])

    return (
        <View style={HistoryStyles.container}>
            <Header
                leftActions={[
                    {
                        icon: AssetIcons.WHITE_LEFT_CHEV,
                        onPress: props.navigation.goBack
                    }
                ]}
                title='Hoàn thành'
            />
            <LazyNavigationScreen>
                <View style={HistoryStyles.content}>
                    <ListView
                        refreshing={refreshStatus === 'FETCHING'}
                        onRefresh={onRefresh}
                        data={orders}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>
            </LazyNavigationScreen>
        </View>
    )
}
