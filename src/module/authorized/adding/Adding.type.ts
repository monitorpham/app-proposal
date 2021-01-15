import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';
import { RouteProp } from '@react-navigation/native';
import { HospitalDepartment,User } from '@data';

export type AddingState = {
    getHospitalDepartmentStatus: FetchStatus,
    hospitalDepartment: HospitalDepartment[],
    createStatus: FetchStatus,
    userList: User[],
    getUserListStatus: FetchStatus,
    // getLicensePlateStatus: FetchStatus,
    // licensePlates: CarLicensePlate[]
 };
export type AddingStoreApi = StoreActionApi<AddingState>;

export type AddingNavigationProps = StackNavigationProp<DashboardStackParams, 'Adding'>

type AddingRouteProp = RouteProp<DashboardStackParams, 'Adding'>;


export type AddingProps = {
    navigation: AddingNavigationProps,
    route: AddingRouteProp
}