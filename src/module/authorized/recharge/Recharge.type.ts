import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';

export type RechargeState = { status: FetchStatus };
export type RechargeStoreApi = StoreActionApi<RechargeState>;

export type RechargeNavigationProps = StackNavigationProp<DashboardStackParams, 'Recharge'>


export type RechargeProps = {
    navigation: RechargeNavigationProps
}