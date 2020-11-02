import { createStore, createHook } from 'react-sweet-state';
import { AccountActions } from './Account.action';
import { AccountState } from './Account.type';

export const INITIAL_STATE: AccountState = {
    status: 'INIT'
}

export const AccountStore = createStore<AccountState, typeof AccountActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: AccountActions,
    name: 'AccountStore'
});

export const useAccount = createHook(AccountStore);
