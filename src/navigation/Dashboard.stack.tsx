import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, Wallet, Recharge, Order, AgencyMap, Booking, History } from '@module';

const Stack = createStackNavigator();

export type DashboardStackParams = {
    Dashboard: undefined,
    Wallet: undefined,
    Recharge: undefined,
    Order: { orderId: string },
    AgencyMap: undefined,
    Booking: { agencyId: string },
    History: undefined
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
            <Stack.Screen
                component={Wallet}
                name='Wallet'
            />
            <Stack.Screen
                component={Recharge}
                name='Recharge'
            />
            <Stack.Screen
                component={Order}
                name='Order'
            />
            <Stack.Screen
                component={AgencyMap}
                name='AgencyMap'
            />
            <Stack.Screen
                component={Booking}
                name='Booking'
            />
            <Stack.Screen
                component={History}
                name='History'
            />
        </Stack.Navigator>
    )
}