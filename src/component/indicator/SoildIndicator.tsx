import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Colors } from '@res'

export type SoildIndicatorProps = {

}

export const SoildIndicator: React.FC<SoildIndicatorProps> = (props) => {
    return (
        <View style={[styles.container]}>
            <ActivityIndicator
                size='large'
                color={Colors.primaryBlue}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
