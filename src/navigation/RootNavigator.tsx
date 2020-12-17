import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationStack } from './Authentication.stack'
import DashboardTab from './Dashboard.tab';
import { useStoreageUser } from '@shared-state';
// import { codeStatus } from '../module/authentication/sign-in/SignIn.store';
import { SplashScreen } from '@module';
import { StatusBar } from 'react-native';
export const RootNavigator: React.FC = () => {
    const [{ profile, getUserFromStoreageStatus }] = useStoreageUser()

    // const [{ code, status }] = codeStatus()

    const renderNavigator = React.useMemo(() => {
        // console.log(status)
        // console.log(getUserFromStoreageStatus)
        if (getUserFromStoreageStatus === 'INIT' || getUserFromStoreageStatus === 'FETCHING') {
            return <SplashScreen />
        }
        const isAuthorized = !!profile
        // console.log(isAuthorized)
        if (isAuthorized) {
            return (
                <>
                    <StatusBar barStyle='light-content' />
                    <DashboardTab />
                </>
            )
        }else
        return (
            <>
                <StatusBar barStyle='dark-content' />
                <AuthenticationStack />
            </>
        )
    }, [profile, getUserFromStoreageStatus])

    return (
        <NavigationContainer>
            {renderNavigator}
        </NavigationContainer>
    )
}