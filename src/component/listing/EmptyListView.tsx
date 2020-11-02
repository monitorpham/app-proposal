import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextView } from '../text-view'
import { TextStyles, FontSizeDimens, Colors } from '@res'

export type EmptyListViewProps = {
    title?: string
    content?: string
}

export const EmptyListView: React.FC<EmptyListViewProps> = (props) => {
    return (
        <View style={[styles.container]}>
            <TextView
                style={styles.title}
                text={props.title ?? 'Oops!'}
            />
            <TextView
                style={styles.content}
                text={props.content ?? 'Không có dữ liệu!'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        ...TextStyles.title,
        color: Colors.primaryBlue
    },
    content: {
        fontSize: FontSizeDimens.xSm
    }
})
