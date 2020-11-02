import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthenticationStackParams } from '@navigation';
import { User } from '@data';

export type SignUpState = {
    status: FetchStatus,
    verifyCode?: number,
    user?: User
};
export type SignUpStoreApi = StoreActionApi<SignUpState>;

export type SignUpNavigationProps = StackNavigationProp<AuthenticationStackParams, 'SignUp'>


export type SignUpProps = {
    navigation: SignUpNavigationProps
}