import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '@component'
import { useSplashScreen } from './SplashScreen.store'
import { SplashScreenProps } from './SplashScreen.type'
import { SplashScreenStyles } from './SplashScreen.style'
import { AssetIcons } from '@assets'
import { useStoreageUser } from '@shared-state'
import NativeSplashScreen from 'react-native-splash-screen'

export const SplashScreen: React.FC<SplashScreenProps> = (props) => {
    const [state, action] = useSplashScreen()
    const [_, userAction] = useStoreageUser()

    React.useEffect(() => {
        return NativeSplashScreen.hide
    }, [])

    React.useEffect(() => {
        userAction.getUserFromStorage()
    }, [])
    return (
        <>

        </>
    )
}
