import { createStore, createHook } from 'react-sweet-state';
import { LicensePlateActions } from './LicensePlate.action';
import { LicensePlateState } from './LicensePlate.type';

export const INITIAL_STATE: LicensePlateState = {
    getLicensePlateStatus: 'INIT',
    licensePlates: []
}

export const LicensePlateStore = createStore<LicensePlateState, typeof LicensePlateActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: LicensePlateActions,
    name: 'LicensePlateStore'
});

export const useLicensePlate = createHook(LicensePlateStore);