import React from 'react'
import { View, Text, ListRenderItemInfo } from 'react-native'
import { Header, ListView } from '@component'
import { useNotification } from './Notification.store'
import { NotificationProps } from './Notification.type'
import { NotificationStyles } from './Notification.style'
import { NotificationListItem } from './NotificationListItem'
import { LazyNavigationScreen } from '@layout'
import { useUserNotification } from '@shared-state'
import { NotificationData } from '@data'

export const Notification: React.FC<NotificationProps> = (props) => {
    const [state, action] = useNotification()
    const [{ refreshNotificationStatus, notifications }, userAction] = useUserNotification()
    React.useEffect(() => {
        userAction.refreshNotification()
    }, [])

    const renderItem = React.useCallback(({ item }: ListRenderItemInfo<NotificationData>) => {
        return (
            <NotificationListItem
                notification={item}
                divider
            />
        )
    }, [])

    const keyExtractor = React.useCallback((item: NotificationData) => item.id, [])

    return (
        <View style={NotificationStyles.container}>
            <Header
                title='Thông báo'
            />
            <LazyNavigationScreen>
                <ListView
                    refreshing={refreshNotificationStatus === 'FETCHING'}
                    onRefresh={userAction.refreshNotification}
                    data={notifications}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
            </LazyNavigationScreen>
        </View>
    )
}
