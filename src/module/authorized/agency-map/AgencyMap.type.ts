import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';
import { Agency } from '@data';

export type AgencyMapState = {
    status: FetchStatus,
    agencies: Agency[]
};
export type AgencyMapStoreApi = StoreActionApi<AgencyMapState>;

export type AgencyMapNavigationProps = StackNavigationProp<DashboardStackParams, 'AgencyMap'>


export type AgencyMapProps = {
    navigation: AgencyMapNavigationProps
}