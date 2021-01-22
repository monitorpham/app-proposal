import { createStore, createHook } from 'react-sweet-state';
import { UpdateProgressActions } from './UpdateProgress.action';
import { UpdateProgressState } from './UpdateProgress.type';

export const INITIAL_STATE: UpdateProgressState = {
    createStatus: 'INIT',
    getHospitalDepartmentStatus: 'INIT',
    hospitalDepartment: [],
    userList: [],
    getUserListStatus: 'INIT'
    // licensePlates: [],
    // getLicensePlateStatus: 'INIT'
}

export const UpdateProgressStore = createStore<UpdateProgressState, typeof UpdateProgressActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: UpdateProgressActions,
    name: 'UpdateProgressStore'
});

export const useUpdateProgress = createHook(UpdateProgressStore);