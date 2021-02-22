import { createStore, createHook } from 'react-sweet-state';
import { ViewProgressActions } from './ViewProgress.action';
import { ViewProgressState } from './ViewProgress.type';

export const INITIAL_STATE: ViewProgressState = {
    // createStatus: 'INIT',
    // getHospitalDepartmentStatus: 'INIT',
    // hospitalDepartment: [],
    // userList: [],
    // getUserListStatus: 'INIT'
    // licensePlates: [],
    // getLicensePlateStatus: 'INIT'
    progress: [],
    getProgressStatus: 'INIT'
}

export const ViewProgressStore = createStore<ViewProgressState, typeof ViewProgressActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: ViewProgressActions,
    name: 'ViewProgressStore'
});

export const useViewProgress = createHook(ViewProgressStore);