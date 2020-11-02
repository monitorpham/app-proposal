import React from 'react'
import { View, Text, StyleSheet, Modal, ActivityIndicator, StatusBar } from 'react-native'
import { FetchStatus } from '@constant'
import { Colors } from '@res'

export type FetchStatusFullScreenIndicatorProps = {
    trackStatuses: FetchStatus[]
}

export const FetchStatusFullScreenIndicator: React.FC<FetchStatusFullScreenIndicatorProps> = (props) => {

    const visible = React.useMemo(() => {
        const fetchingStatus = props.trackStatuses.find(x => x === 'FETCHING')
        return !!fetchingStatus
    }, props.trackStatuses)

    const indicator = React.useMemo(() => {
        return (
            <View style={[styles.container]}>
                <StatusBar backgroundColor={Colors.primaryOverlay} />
                <View style={styles.box}>
                    <ActivityIndicator
                        size='large'
                        color={Colors.primaryWhite}
                    />
                </View>
            </View>
        )
    }, [])

    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent
        >
            {indicator}
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryOverlay
    },
    box: {
        borderRadius: 12,
        padding: 16,
        backgroundColor: Colors.primaryDark,
    }
})
