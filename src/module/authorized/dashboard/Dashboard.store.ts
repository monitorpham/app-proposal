import { createStore, createHook } from 'react-sweet-state';
import { DashboardActions } from './Dashboard.action';
import { DashboardState } from './Dashboard.type';

export const INITIAL_STATE: DashboardState = {
    status: 'INIT'
}

export const DashboardStore = createStore<DashboardState, typeof DashboardActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: DashboardActions,
    name: 'DashboardStore'
});

export const useDashboard = createHook(DashboardStore);