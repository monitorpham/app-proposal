import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, History } from '@module';

const Stack = createStackNavigator();

export type DashboardStackParams = {
    Dashboard: undefined,
    // Wallet: undefined,
    // Recharge: undefined,
    // Order: { orderId: string },
    // AgencyMap: undefined,
    // Booking: { agencyId: string },
    // History: undefined,
    Proposal: undefined
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
                component={History}
                name='Proposal'
            />
        </Stack.Navigator>
    )
}