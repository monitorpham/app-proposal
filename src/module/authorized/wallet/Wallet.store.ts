import { createStore, createHook } from 'react-sweet-state';
import { WalletActions } from './Wallet.action';
import { WalletState } from './Wallet.type';

export const INITIAL_STATE: WalletState = {
    status: 'INIT'
}

export const WalletStore = createStore<WalletState, typeof WalletActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: WalletActions,
    name: 'WalletStore'
});

export const useWallet = createHook(WalletStore);