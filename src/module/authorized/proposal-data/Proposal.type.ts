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
export type ProposalStoreApi = StoreActionApi<ProposalState>;

export type ProposalNavigationProps = StackNavigationProp<DashboardStackParams, 'Proposal'>


export type ProposalProps = {
    navigation: ProposalNavigationProps
}