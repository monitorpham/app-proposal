import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';
import { RouteProp } from '@react-navigation/native';
import { Agency, CarLicensePlate } from '@data';

export type BookingState = {
    getAgencyStatus: FetchStatus,
    agencies: Agency[],
    orderStatus: FetchStatus,
    getLicensePlateStatus: FetchStatus,
    licensePlates: CarLicensePlate[]
 };
export type BookingStoreApi = StoreActionApi<BookingState>;

export type BookingNavigationProps = StackNavigationProp<DashboardStackParams, 'Booking'>

type BookingRouteProp = RouteProp<DashboardStackParams, 'Booking'>;


export type BookingProps = {
    navigation: BookingNavigationProps,
    route: BookingRouteProp
}