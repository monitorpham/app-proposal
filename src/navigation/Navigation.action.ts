import { NavigationStoreApi } from './Navigation.type';
import { INITIAL_STATE } from './Navigation.store';

export const NavigationActions = {
    reset: () => async ({ setState }: NavigationStoreApi) => {
        setState(INITIAL_STATE)
    },
}