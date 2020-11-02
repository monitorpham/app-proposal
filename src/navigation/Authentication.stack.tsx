import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, ForgotPassword } from '@module';

const Stack = createStackNavigator();

export type AuthenticationStackParams = {
    SignIn: undefined,
    SignUp: undefined,
    ForgotPassword: undefined
}

export const AuthenticationStack: React.FC = () => {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen
                component={SignIn}
                name='SignIn'
            />
            <Stack.Screen
                component={SignUp}
                name='SignUp'
            />
            <Stack.Screen
                component={ForgotPassword}
                name='ForgotPassword'
            />
        </Stack.Navigator>
    )
}