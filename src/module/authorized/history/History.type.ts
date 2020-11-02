import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';
import { Order } from '@data';

export type HistoryState = {
    refreshStatus: FetchStatus,
    orders: Order[]
};
export type HistoryStoreApi = StoreActionApi<HistoryState>;

export type HistoryNavigationProps = StackNavigationProp<DashboardStackParams, 'History'>


export type HistoryProps = {
    navigation: HistoryNavigationProps
}