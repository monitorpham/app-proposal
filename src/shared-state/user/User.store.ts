import { createStore, createHook } from 'react-sweet-state';
import { UserActions } from './User.action';
import { UserState } from './User.type';

export const INITIAL_STATE: UserState = {
    user: undefined,
    id_token: 'INIT',
    notifications: [],
    updateProfileStatus: 'INIT',
    getProfileStatus: 'INIT',
    refreshNotificationStatus: 'INIT',
    getUserFromStoreageStatus: 'INIT',
    removeUserFromStoreageStatus: 'INIT'
}

export const UserStore = createStore<UserState, typeof UserActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: UserActions,
    name: 'UserStore'
});

export const useUser = createHook(UserStore);

export const useStoreageUser = createHook(UserStore, {
    selector: (state: UserState) => ({ profile: state.user, getUserFromStoreageStatus: state.getUserFromStoreageStatus })
});

export const useUserProfile = createHook(UserStore, {
    selector: (state: UserState) => ({ profile: state.user })
});

export const useUserNotification = createHook(
    UserStore,
    {
        selector: (state: UserState) => ({
            user: state.user,
            refreshNotificationStatus: state.refreshNotificationStatus,
            notifications: state.notifications
        })
    }
);