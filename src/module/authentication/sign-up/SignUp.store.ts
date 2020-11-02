import { createStore, createHook } from 'react-sweet-state';
import { SignUpActions } from './SignUp.action';
import { SignUpState } from './SignUp.type';

export const INITIAL_STATE: SignUpState = {
    status: 'INIT',
    user: undefined,
    verifyCode: undefined
}

export const SignUpStore = createStore<SignUpState, typeof SignUpActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: SignUpActions,
    name: 'SignUpStore'
});

export const useSignUp = createHook(SignUpStore);