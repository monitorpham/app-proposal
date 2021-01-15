import { RouteProp } from '@react-navigation/native';
import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { DashboardStackParams } from '@navigation';
import { Proposal } from '@data';

export type ProposalState = {
    refreshStatus: FetchStatus,
    proposals: Proposal[]
};
export type ProposalDetailStoreApi = StoreActionApi<ProposalState>;

export type ProposalDetailNavigationProps = StackNavigationProp<DashboardStackParams, 'ProposalDetail'>

type ProfileScreenRouteProp = RouteProp<DashboardStackParams, 'ProposalDetail'>;

export type ProposalDetailProps = {
    navigation: ProposalDetailNavigationProps
    route: ProfileScreenRouteProp
}