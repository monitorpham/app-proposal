import { createStore, createHook } from 'react-sweet-state';
import { NotificationActions } from './Notification.action';
import { NotificationState } from './Notification.type';

export const INITIAL_STATE: NotificationState = {
    status: 'INIT'
}

export const NotificationStore = createStore<NotificationState, typeof NotificationActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: NotificationActions,
    name: 'NotificationStore'
});

export const useNotification = createHook(NotificationStore);