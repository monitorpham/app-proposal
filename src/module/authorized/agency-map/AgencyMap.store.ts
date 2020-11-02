import { createStore, createHook } from 'react-sweet-state';
import { AgencyMapActions } from './AgencyMap.action';
import { AgencyMapState } from './AgencyMap.type';

export const INITIAL_STATE: AgencyMapState = {
    status: 'INIT',
    agencies: []
}

export const AgencyMapStore = createStore<AgencyMapState, typeof AgencyMapActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: AgencyMapActions,
    name: 'AgencyMapStore'
});

export const useAgencyMap = createHook(AgencyMapStore);