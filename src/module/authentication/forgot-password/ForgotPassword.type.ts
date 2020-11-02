import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthenticationStackParams } from '@navigation';

export type ForgotPasswordState = {
    status: FetchStatus,
    verifyCode?: number,
    getVerifyCodeStatus: FetchStatus
};
export type ForgotPasswordStoreApi = StoreActionApi<ForgotPasswordState>;

export type ForgotPasswordNavigationProps = StackNavigationProp<AuthenticationStackParams, 'ForgotPassword'>


export type ForgotPasswordProps = {
    navigation: ForgotPasswordNavigationProps
}