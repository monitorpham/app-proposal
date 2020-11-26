import { createStore, createHook } from 'react-sweet-state';
import { ProposalActions } from './Proposal.action';
import { ProposalState } from './Proposal.type';

export const INITIAL_STATE: ProposalState = {
    refreshStatus: 'INIT',
    proposals: []
}

export const ProposalStore = createStore<ProposalState, typeof ProposalActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: ProposalActions,
    name: 'ProposalStore'
});

export const useProposal = createHook(ProposalStore);