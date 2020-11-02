import { RechargeStoreApi } from './Recharge.type';
import { INITIAL_STATE } from './Recharge.store';

export const RechargeActions = {
    reset: () => async ({ setState }: RechargeStoreApi) => {
        setState(INITIAL_STATE)
    }
}