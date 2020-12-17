import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthenticationStackParams } from '@navigation';
import { User } from '@data';

export type SignInState = {
    status: FetchStatus,
    user?: User,
    token?: User
    // code: FetchStatus
};
export type SignInStoreApi = StoreActionApi<SignInState>;

export type SignInNavigationProps = StackNavigationProp<AuthenticationStackParams, 'SignIn'>


export type SignInProps = {
    navigation: SignInNavigationProps
}