import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthenticationStackParams } from '@navigation';

export type NotificationState = { status: FetchStatus };
export type NotificationStoreApi = StoreActionApi<NotificationState>;

export type NotificationNavigationProps = StackNavigationProp<AuthenticationStackParams, 'Notification'>


export type NotificationProps = {
    navigation: NotificationNavigationProps
}