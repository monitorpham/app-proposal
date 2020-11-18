import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import { TextView } from '@component'
import { TextStyles, FontSizeDimens, Colors } from '@res'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import moment from 'moment'
import { NotificationData } from '@data'
import { useUser, useUserNotification } from '@shared-state'

export type NotificationListItemProps = {
    notification: NotificationData
    divider?: boolean
}

export const NotificationListItem: React.FC<NotificationListItemProps> = (props) => {
    const [{ user }] = useUserNotification()
    const { notification } = props

    // const renderAvatar = React.useMemo(() => {
    //     return (
    //         <Avatar
    //             size='medium'
    //             title={user?.shortName}
    //             source={{ uri: user?.avatar }}
    //             rounded
    //         />
    //     )
    // }, [user])

    const renderInfomation = React.useMemo(() => {
        return (
            <View style={styles.infocontainer}>
                <TextView
                    style={styles.title}
                    text={notification.title}
                />
                <TextView
                    style={TextStyles.label}
                    text={notification.content}
                />
                <TextView
                    style={styles.timeLabel}
                    text={moment(notification.date).format('HH:mm')}
                />
            </View>
        )
    }, [])

    const renderDivider = React.useMemo(() => {
        if (!props.divider) return null
        return (
            <View style={styles.divider} />
        )
    }, [props.divider])
    return (
        <View style={[styles.container]}>
            <View style={styles.content}>
                {/* {renderAvatar} */}
                {renderInfomation}
            </View>
            {renderDivider}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: responsiveWidth(4.5),
        paddingBottom: 0
    },
    content: {
        flexDirection: 'row',
        paddingBottom: responsiveWidth(4.5),
    },
    infocontainer: {
        flex: 1,
        marginHorizontal: responsiveWidth(4)
    },
    timeLabel: {
        marginTop: responsiveHeight(0.8),
        fontSize: FontSizeDimens.xSm,
        color: Colors.primaryGray
    },
    divider: {
        height: 0.5,
        backgroundColor: Colors.primaryGray
    },
    title: {
        fontSize: FontSizeDimens.xMd,
        fontWeight: '700',
        color: Colors.primaryBlue
    }
})
