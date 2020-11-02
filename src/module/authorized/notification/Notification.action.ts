import { NotificationStoreApi } from './Notification.type';
import { INITIAL_STATE } from './Notification.store';

export const NotificationActions = {
    reset: () => async ({ setState }: NotificationStoreApi) => {
        setState(INITIAL_STATE)
    }
}