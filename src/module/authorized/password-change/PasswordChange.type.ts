import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountStackParams } from '@navigation';

export type PasswordChangeState = { status: FetchStatus };
export type PasswordChangeStoreApi = StoreActionApi<PasswordChangeState>;

export type PasswordChangeNavigationProps = StackNavigationProp<AccountStackParams, 'PasswordChange'>


export type PasswordChangeProps = {
    navigation: PasswordChangeNavigationProps
}