import { createStore, createHook } from 'react-sweet-state';
import { ForgotPasswordActions } from './ForgotPassword.action';
import { ForgotPasswordState } from './ForgotPassword.type';

export const INITIAL_STATE: ForgotPasswordState = {
    status: 'INIT',
    verifyCode: undefined,
    getVerifyCodeStatus: 'INIT'
}

export const ForgotPasswordStore = createStore<ForgotPasswordState, typeof ForgotPasswordActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: ForgotPasswordActions,
    name: 'ForgotPasswordStore'
});

export const useForgotPassword = createHook(ForgotPasswordStore);