import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountStackParams, DashboardTabParams } from '@navigation';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type AccountState = { status: FetchStatus };
export type AccountStoreApi = StoreActionApi<AccountState>;

export type AccountNavigationProps = CompositeNavigationProp<
BottomTabNavigationProp<DashboardTabParams, 'AccountStack'>,
StackNavigationProp<AccountStackParams, 'Account'>
>


export type AccountProps = {
    navigation: AccountNavigationProps
}