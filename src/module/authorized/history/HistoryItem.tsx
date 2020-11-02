import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { KeyValueText, TextView } from '@component'
import { Divider } from 'react-native-elements'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { FontSizeDimens, Colors } from '@res'
import moment from 'moment'
import { Order } from '@data'
import { useUser } from '@shared-state'
import { StringUtils } from '@util'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export type HistoryItemProps = {
    order: Order,
    onPress?: () => void
}

export const HistoryItem: React.FC<HistoryItemProps> = ({ order, onPress }) => {
    const [{ user }] = useUser()
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container]}>
                <KeyValueText
                    containerStyle={styles.item}
                    title='Tên khách hàng: '
                    value={user?.name}
                >
                    <TextView
                        style={styles.date}
                        text={moment(order.date).format('DD/MM/YYYY HH:mm')}
                    />
                </KeyValueText>
                <KeyValueText
                    containerStyle={styles.item}
                    title='Gía Tiền: '
                    value={StringUtils.currenry(order.price)}
                />
                <KeyValueText
                    containerStyle={styles.item}
                    title='Biển số: '
                    value={order.licensePlate}
                />
                <KeyValueText
                    containerStyle={styles.item}
                    title='Địa điểm: '
                    value={order.address}
                />
                <TextView
                    style={styles.status}
                    text={order.active ? 'Chưa hoàn thành' : 'Đã xong'}
                />
            </View>
            <Divider />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    item: {
        marginTop: responsiveHeight(0.8)
    },
    date: {
        color: Colors.primaryGray,
        fontSize: FontSizeDimens.xSm,
        alignSelf: 'flex-end'
    },
    status: {
        marginTop: responsiveHeight(0.8),
        fontSize: FontSizeDimens.xSm,
        color: '#00B30D'
    }
})
