import {
    StoreActionApi,
} from 'react-sweet-state';
import { User, NotificationData } from '@data';
import { FetchStatus } from '@constant';

export type UserState = {
    user?: User,
    id_token: FetchStatus,
    notifications: NotificationData[]
    getProfileStatus: FetchStatus,
    updateProfileStatus: FetchStatus,
    refreshNotificationStatus: FetchStatus,
    getUserFromStoreageStatus: FetchStatus,
    removeUserFromStoreageStatus: FetchStatus
};
export type UserStoreApi = StoreActionApi<UserState>;
