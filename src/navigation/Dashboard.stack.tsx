import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, History, ProposalI, ProposalDetail, Adding } from '@module';

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
    ProposalDetail: {proId:string}
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
                component={ProposalDetail}
                name='ProposalDetail'
            />
            <Stack.Screen
                component={Adding}
                name='Adding'
            />
        </Stack.Navigator>
    )
}