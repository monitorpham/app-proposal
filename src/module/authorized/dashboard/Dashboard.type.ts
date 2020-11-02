import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';

export type DashboardState = { status: FetchStatus };
export type DashboardStoreApi = StoreActionApi<DashboardState>;

export type DashboardNavigationProps = StackNavigationProp<DashboardStackParams, 'Dashboard'>


export type DashboardProps = {
    navigation: DashboardNavigationProps
}