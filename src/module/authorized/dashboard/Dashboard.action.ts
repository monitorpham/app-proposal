import { DashboardStoreApi } from './Dashboard.type';
import { INITIAL_STATE } from './Dashboard.store';

export const DashboardActions = {
    reset: () => ({ setState }: DashboardStoreApi) => {
        setState(INITIAL_STATE)
    }
}