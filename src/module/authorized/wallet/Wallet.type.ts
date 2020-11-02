import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';

export type WalletState = { status: FetchStatus };
export type WalletStoreApi = StoreActionApi<WalletState>;

export type WalletNavigationProps = StackNavigationProp<DashboardStackParams, 'Wallet'>


export type WalletProps = {
    navigation: WalletNavigationProps
}