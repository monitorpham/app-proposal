import { createStore, createHook } from 'react-sweet-state';
import { RechargeActions } from './Recharge.action';
import { RechargeState } from './Recharge.type';

export const INITIAL_STATE: RechargeState = {
    status: 'INIT'
}

export const RechargeStore = createStore<RechargeState, typeof RechargeActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: RechargeActions,
    name: 'RechargeStore'
});

export const useRecharge = createHook(RechargeStore);