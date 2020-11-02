import { createStore, createHook } from 'react-sweet-state';
import { NavigationActions } from './Navigation.action';
import { NavigationState } from './Navigation.type';

export const INITIAL_STATE: NavigationState = {
    isAuthorized: false
}

export const NavigationStore = createStore<NavigationState, typeof NavigationActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: NavigationActions,
    name: 'NavigationStore'
});

export const useAppNavigation = createHook(NavigationStore);