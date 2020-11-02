import { createStore, createHook } from 'react-sweet-state';
import { SplashScreenActions } from './SplashScreen.action';
import { SplashScreenState } from './SplashScreen.type';

export const INITIAL_STATE: SplashScreenState = {
    status: 'INIT'
}

export const SplashScreenStore = createStore<SplashScreenState, typeof SplashScreenActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: SplashScreenActions,
    name: 'SplashScreenStore'
});

export const useSplashScreen = createHook(SplashScreenStore);