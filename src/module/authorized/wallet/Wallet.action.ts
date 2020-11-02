import { WalletStoreApi } from './Wallet.type';
import { INITIAL_STATE } from './Wallet.store';

export const WalletActions = {
    reset: () => async ({ setState }: WalletStoreApi) => {
        setState(INITIAL_STATE)
    }
}