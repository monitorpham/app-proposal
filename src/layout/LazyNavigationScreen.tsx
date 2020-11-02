import React from 'react'
import { View, StyleSheet, InteractionManager } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { SoildIndicator } from '@component'

export type LazyNavigationScreenProps = {
    indicatorType?: 'NONE' | 'SOILD'
}

export const LazyNavigationScreen: React.FC<LazyNavigationScreenProps> = (props) => {
    const {
        indicatorType = 'SOILD'
    } = props
    let _isMounted = false
    const [focus, setFocus] = React.useState(false)
    useFocusEffect(() => {
        InteractionManager.runAfterInteractions(() => _isMounted && setFocus(true))
    })
    React.useEffect(() => {
        _isMounted = true
        return () => { _isMounted = false }
    }, [])

    const renderIndicator = React.useMemo(() => {
        if (indicatorType === 'SOILD') {
            return (
                <SoildIndicator />
            )
        }
        return null
    }, [indicatorType])

    const render = React.useMemo(() => {
        if (!focus) return renderIndicator
        return props.children
    }, [focus, indicatorType, props.children])

    return (
        <View style={[styles.container]}>
            {render}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
