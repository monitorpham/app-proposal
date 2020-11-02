import { createStore, createHook } from 'react-sweet-state';
import { PasswordChangeActions } from './PasswordChange.action';
import { PasswordChangeState } from './PasswordChange.type';

export const INITIAL_STATE: PasswordChangeState = {
    status: 'INIT'
}

export const PasswordChangeStore = createStore<PasswordChangeState, typeof PasswordChangeActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: PasswordChangeActions,
    name: 'PasswordChangeStore'
});

export const usePersonalInfomation = createHook(PasswordChangeStore);