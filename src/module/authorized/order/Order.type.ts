import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';
import { Order } from '@data';

export type OrderState = {
    status: FetchStatus,
    order?: Order
};
export type OrderStoreApi = StoreActionApi<OrderState>;

export type OrderNavigationProps = StackNavigationProp<DashboardStackParams, 'Order'>

type ProfileScreenRouteProp = RouteProp<DashboardStackParams, 'Order'>;

export type OrderProps = {
    navigation: OrderNavigationProps
    route: ProfileScreenRouteProp
}