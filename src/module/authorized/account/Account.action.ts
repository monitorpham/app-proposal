import { AccountStoreApi } from './Account.type';
import { INITIAL_STATE } from './Account.store';

export const AccountActions = {
    reset: () => async ({ setState }: AccountStoreApi) => {
        setState(INITIAL_STATE)
    }
}