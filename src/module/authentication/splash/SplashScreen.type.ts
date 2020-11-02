import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'

export type SplashScreenState = { status: FetchStatus };
export type SplashScreenStoreApi = StoreActionApi<SplashScreenState>;


export type SplashScreenProps = {
}