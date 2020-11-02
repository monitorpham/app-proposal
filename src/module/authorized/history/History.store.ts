import { createStore, createHook } from 'react-sweet-state';
import { HistoryActions } from './History.action';
import { HistoryState } from './History.type';

export const INITIAL_STATE: HistoryState = {
    refreshStatus: 'INIT',
    orders: []
}

export const HistoryStore = createStore<HistoryState, typeof HistoryActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: HistoryActions,
    name: 'HistoryStore'
});

export const useHistory = createHook(HistoryStore);