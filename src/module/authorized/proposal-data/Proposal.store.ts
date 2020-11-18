import { createStore, createHook } from 'react-sweet-state';
import { ProposalActions } from './Proposal.action';
import { ProposalyState } from './Proposal.type';

export const INITIAL_STATE: ProposalyState = {
    refreshStatus: 'INIT',
    orders: []
}

export const ProposalStore = createStore<ProposalyState, typeof ProposalActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: ProposalActions,
    name: 'ProposalStore'
});

export const useHistory = createHook(ProposalStore);