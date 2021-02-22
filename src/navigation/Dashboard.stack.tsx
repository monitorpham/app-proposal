import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, UpdateProgress, ViewProgress, ProposalI, Adding } from '@module';

const Stack = createStackNavigator();

export type DashboardStackParams = {
    Dashboard: undefined,
    // Wallet: undefined,
    // Recharge: undefined,
    // Order: { orderId: string },
    // AgencyMap: undefined,
    Adding: undefined,
    // History: undefined,
    Proposal: undefined,
    UpdateProgress: undefined,
    ViewProgress: { idProgress: string }
}

export const DashboardStack: React.FC = () => {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen
                component={Dashboard}
                name='Dashboard'
            />
            {/* <Stack.Screen
                component={History}
                name='History'
            /> */}
            <Stack.Screen
                component={ProposalI}
                name='Proposal'
            />
            <Stack.Screen
                component={UpdateProgress}
                name='UpdateProgress'
            />
            <Stack.Screen
                component={ViewProgress}
                name='ViewProgress'
            />
            <Stack.Screen
                component={Adding}
                name='Adding'
            />
        </Stack.Navigator>
    )
}