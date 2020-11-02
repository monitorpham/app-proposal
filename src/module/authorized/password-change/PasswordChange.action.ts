import { PasswordChangeStoreApi } from './PasswordChange.type';
import { INITIAL_STATE } from './PasswordChange.store';

export const PasswordChangeActions = {
    reset: () => ({ setState }: PasswordChangeStoreApi) => {
        setState(INITIAL_STATE)
    },
}