import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';
import { RouteProp } from '@react-navigation/native';
import { HospitalDepartment,Progress } from '@data';

export type ViewProgressState = {
    progress: Progress[],
    getProgressStatus: FetchStatus,
    // getLicensePlateStatus: FetchStatus,
    // licensePlates: CarLicensePlate[]
 };
export type ViewProgressStoreApi = StoreActionApi<ViewProgressState>;

export type ViewProgressNavigationProps = StackNavigationProp<DashboardStackParams, 'ViewProgress'>

type ViewProgressRouteProp = RouteProp<DashboardStackParams, 'ViewProgress'>;


export type ViewProgressProps = {
    navigation: ViewProgressNavigationProps,
    route: ViewProgressRouteProp
}