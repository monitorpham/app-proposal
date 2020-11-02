import React from 'react'
import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import moment from 'moment'
import { TextView } from '@component'
import { FontSizeDimens, Colors } from '@res'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export type TransactionItemProps = {

}

type LineValueProps = {
    title: string,
    value: string,
    textStyle: StyleProp<TextStyle>
}

const LineValue: React.FC<LineValueProps> = (props) => {
    return (
        <View style={styles.line}>
            <TextView
                style={props.textStyle}
                text={props.title}
            />
            <TextView
                style={props.textStyle}
                text={props.value}
            />
        </View>
    )
}

export const TransactionItem: React.FC<TransactionItemProps> = (props) => {
    return (
        <View style={[styles.container]}>
            <LineValue
                textStyle={styles.titleStyle}
                title='Thanh toán'
                value='-10.000'
            />
            <LineValue
                textStyle={styles.smallStyle}
                title={moment().format('DD-MM-YYYY HH:mm')}
                value='150.000'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderBottomWidth: 0.5,
        borderColor: Colors.primaryGray50
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleStyle: {
        fontSize: FontSizeDimens.xMd,
        fontWeight: '600'
    },
    smallStyle: {
        marginTop: responsiveHeight(0.6),
        fontSize: FontSizeDimens.xSm,
        color: Colors.primaryGray50
    }
})
