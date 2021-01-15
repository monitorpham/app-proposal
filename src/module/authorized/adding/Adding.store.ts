import { createStore, createHook } from 'react-sweet-state';
import { AddingActions } from './Adding.action';
import { AddingState } from './Adding.type';

export const INITIAL_STATE: AddingState = {
    createStatus: 'INIT',
    getHospitalDepartmentStatus: 'INIT',
    hospitalDepartment: [],
    userList: [],
    getUserListStatus: 'INIT'
    // licensePlates: [],
    // getLicensePlateStatus: 'INIT'
}

export const AddingStore = createStore<AddingState, typeof AddingActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: AddingActions,
    name: 'AddingStore'
});

export const useAdding = createHook(AddingStore);