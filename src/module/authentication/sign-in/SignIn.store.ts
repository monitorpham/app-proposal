import { createStore, createHook } from 'react-sweet-state';
import { SignInActions } from './SignIn.action';
import { SignInState } from './SignIn.type';

export const INITIAL_STATE: SignInState = {
    status: 'INIT',
    user: undefined
    // code: 'INIT'
}

export const SignInStore = createStore<SignInState, typeof SignInActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: SignInActions,
    name: 'SignInStore'
});

export const useSignIn = createHook(SignInStore);

// export const codeStatus = createHook(SignInStore, {
//     selector: (state: SignInState) => ({ code: state.status, status: state.status })
// });
