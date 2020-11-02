import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountStackParams } from '@navigation';
import { CarLicensePlate } from '@data';

export type LicensePlateState = {
    getLicensePlateStatus: FetchStatus,
    licensePlates: CarLicensePlate[],
    updatingStatus: FetchStatus
};
export type LicensePlateStoreApi = StoreActionApi<LicensePlateState>;

export type LicensePlateNavigationProps = StackNavigationProp<AccountStackParams, 'LicensePlate'>

export type LicensePlateProps = {
    navigation: LicensePlateNavigationProps
}