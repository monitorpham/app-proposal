import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';
import { RouteProp } from '@react-navigation/native';
import { HospitalDepartment,User } from '@data';

export type UpdateProgressState = {
    getHospitalDepartmentStatus: FetchStatus,
    hospitalDepartment: HospitalDepartment[],
    createStatus: FetchStatus,
    userList: User[],
    getUserListStatus: FetchStatus,
    // getLicensePlateStatus: FetchStatus,
    // licensePlates: CarLicensePlate[]
 };
export type UpdateProgressStoreApi = StoreActionApi<UpdateProgressState>;

export type UpdateProgressNavigationProps = StackNavigationProp<DashboardStackParams, 'UpdateProgress'>

type UpdateProgressRouteProp = RouteProp<DashboardStackParams, 'UpdateProgress'>;


export type UpdateProgressProps = {
    navigation: UpdateProgressNavigationProps,
    route: UpdateProgressRouteProp
}