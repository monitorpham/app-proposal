import { createStore, createHook } from 'react-sweet-state';
import { ProposalDetailActions } from './ProposalDataDetail.action';
import { ProposalState } from './ProposalDataDetail.type';

export const INITIAL_STATE: ProposalState = {
    refreshStatus: 'INIT',
    proposals: []
}

export const ProposalDetailStore = createStore<ProposalState, typeof ProposalDetailActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: ProposalDetailActions,
    name: 'ProposalDetailStore'
});

export const useProposal = createHook(ProposalDetailStore);