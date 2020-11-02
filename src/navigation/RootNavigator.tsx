import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationStack } from './Authentication.stack'
import DashboardTab from './Dashboard.tab';
import { useStoreageUser } from '@shared-state';
import { SplashScreen } from '@module';
import { StatusBar } from 'react-native';
export const RootNavigator: React.FC = () => {
    const [{ profile, getUserFromStoreageStatus }] = useStoreageUser()

    const renderNavigator = React.useMemo(() => {
        if (getUserFromStoreageStatus === 'INIT' || getUserFromStoreageStatus === 'FETCHING') {
            return <SplashScreen />
        }
        const isAuthorized = !!profile
        if (isAuthorized) {
            return (
                <>
                    <StatusBar barStyle='light-content' />
                    <DashboardTab />
                </>
            )
        }
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