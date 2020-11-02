import { SplashScreenStoreApi } from './SplashScreen.type';
import { INITIAL_STATE } from './SplashScreen.store';

export const SplashScreenActions = {
    reset: () => async ({ setState }: SplashScreenStoreApi) => {
        setState(INITIAL_STATE)
    }
}