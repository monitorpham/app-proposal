import {
    StoreActionApi,
} from 'react-sweet-state';

export type NavigationState = { isAuthorized: boolean };
export type NavigationStoreApi = StoreActionApi<NavigationState>;
