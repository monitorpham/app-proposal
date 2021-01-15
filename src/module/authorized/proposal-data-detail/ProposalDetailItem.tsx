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

export type ProposalDetailItemProps = {
    proposal: Proposal,
    // onPress?: () => void
}

export const ProposalDetailItem: React.FC<ProposalDetailItemProps> = ({proposal}) => {
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
                {/* <KeyValueText
                    containerStyle={styles.item}
                    title='Gía Tiền: '
                    value={proposal.remainingDate}
                /> */}
                {/* <KeyValueText
                    containerStyle={styles.item}
                    title='Biển số: '
                    value={order.licensePlate}
                /> */}


                <KeyValueText
                    containerStyle={styles.item}
                    title='ID: '
                    value={proposal.proposal.id}
                />
                <KeyValueText
                    containerStyle={styles.item}
                    title='Khoa: '
                    value={proposal.proposal.hospitalDepartment.hospitalDepartmentName}
                />
                <KeyValueText
                    containerStyle={styles.item}
                    title='Nội dung đề nghị: '
                    value={proposal.proposal.contentProposal}
                />
                <KeyValueText
                    containerStyle={styles.item}
                    title='Tiến trình hiện tại: '
                    value={proposal.currentProgressName}
                />
                <KeyValueText
                    containerStyle={styles.item}
                    title='Người thực hiện: '
                    value={proposal.proposal.userExtra.user.firstName}
                />


                {/* <KeyValueText
                    containerStyle={styles.item}
                    title='Deadline: '
                    value={moment(proposal.deadLine).format('DD/MM/YYYY')}
                /> */} 
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
        padding: 12,
        paddingLeft: 16
        // backgroundColor: '#111'
    },
    item: {
        marginTop: responsiveHeight(0.8),
        // backgroundColor: 'red',
        flex: 1
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


