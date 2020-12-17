import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '@component'
import { useSplashScreen } from './SplashScreen.store'
import { SplashScreenProps } from './SplashScreen.type'
import { SplashScreenStyles } from './SplashScreen.style'
import { AssetIcons } from '@assets'
import { useStoreageUser } from '@shared-state'
// import { codeStatus } from '../sign-in/SignIn.store'
import NativeSplashScreen from 'react-native-splash-screen'

export const SplashScreen: React.FC<SplashScreenProps> = (props) => {
    const [state, action] = useSplashScreen()
    const [_, userAction] = useStoreageUser()
    // const [_,SignInActions] = codeStatus()

    React.useEffect(() => {
        return NativeSplashScreen.hide
    }, [])

    React.useEffect(() => {
        userAction.getUserFromStorage()
    }, [])

    // React.useEffect(() => {
    //     SignInActions.signIn
    // }, [])

    return (
        <>

        </>
    )
}
