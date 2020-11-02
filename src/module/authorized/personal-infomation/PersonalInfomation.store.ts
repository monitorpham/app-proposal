import { createStore, createHook } from 'react-sweet-state';
import { PersonalInfomationActions } from './PersonalInfomation.action';
import { PersonalInfomationState } from './PersonalInfomation.type';

export const INITIAL_STATE: PersonalInfomationState = {
    status: 'INIT'
}

export const PersonalInfomationStore = createStore<PersonalInfomationState, typeof PersonalInfomationActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: PersonalInfomationActions,
    name: 'PersonalInfomationStore'
});

export const usePersonalInfomation = createHook(PersonalInfomationStore);