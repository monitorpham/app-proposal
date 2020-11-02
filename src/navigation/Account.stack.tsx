import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {  Account, PersonalInfomation, PasswordChange } from '@module';

const Stack = createStackNavigator();

export type AccountStackParams = {
    Account: undefined,
    PersonalInfomation: undefined,
    PasswordChange: undefined,
    // LicensePlate: undefined
}

export const AccountStack: React.FC = () => {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen
                component={Account}
                name='Account'
            />
            <Stack.Screen
                component={PersonalInfomation}
                name='PersonalInfomation'
            />
             <Stack.Screen
                component={PasswordChange}
                name='PasswordChange'
            />
            {/* <Stack.Screen
                component={LicensePlate}
                name='LicensePlate'
            /> */}
        </Stack.Navigator>
    )
}