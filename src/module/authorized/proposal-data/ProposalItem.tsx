import React from 'react'

import moment from 'moment'
import { Progress, Proposal } from '@data'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
import { KeyValueText, TextView } from '@component'
import { Divider } from 'react-native-elements'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { FontSizeDimens } from '@res'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export type ProposalItemProps = {
    proposal: Proposal,
    // onPress?: () => void
}

export const ProposalItem: React.FC<ProposalItemProps> = ({proposal}) => {
    // const [{ user }] = useUser()
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.container]}>
                {/* <KeyValueText
                    containerStyle={styles.item}
                    title='Người thực hiện: '
                    value={user?.name}
                >
                    <TextView
                        style={styles.date}
                        text={moment(order.date).format('DD/MM/YYYY HH:mm')}
                    />
                </KeyValueText> */}

                <KeyValueText
                    containerStyle={styles.item}
                    title='Gía Tiền: '
                    id={proposal.id}
                />
                {/* <KeyValueText
                    containerStyle={styles.item}
                    title='Biển số: '
                    value={order.licensePlate}
                /> */}
                <KeyValueText
                    containerStyle={styles.item}
                    title='Địa điểm: '
                    value={proposal.contentProposal}
                />
                {/* <TextView
                    style={styles.status}
                    text={progress.status ? 'Chưa hoàn thành' : 'Đã xong'}
                /> */}
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


