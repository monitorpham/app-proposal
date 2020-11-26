import { UserStoreApi } from './User.type';
import { INITIAL_STATE } from './User.store';
import { User } from '@data';
import { ApiModule } from '@di';
import { Image } from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-community/async-storage';

export const USER_KEY = 'USER_KEY'

export async function saveUserIntoStorage(userId: string) {
    return AsyncStorage.setItem(USER_KEY, userId)
}

export async function removeUserFromStorage() {
    return AsyncStorage.removeItem(USER_KEY)
}

export async function getUserFromStorage(): Promise<string | null> {
    const userID = await AsyncStorage.getItem(USER_KEY)
    return userID
}

export const UserActions = {
    reset: () => ({ setState }: UserStoreApi) => {
        setState(INITIAL_STATE)
    },
    signOut: () => async ({ setState }: UserStoreApi) => {
        setState({ removeUserFromStoreageStatus: 'FETCHING' })
        await removeUserFromStorage()
        setState({ user: undefined, getProfileStatus: 'INIT', updateProfileStatus: 'INIT', removeUserFromStoreageStatus: 'INIT' })
    },
    setUser: (user: User) => async ({ setState }: UserStoreApi) => {
        setState({ user })
        await saveUserIntoStorage(user.id)
    },
    getUserFromStorage: () => async ({ setState, getState }: UserStoreApi) => {
        setState({ getUserFromStoreageStatus: 'FETCHING' })
        const userId = await getUserFromStorage()
        if (!userId) {
            setState({ getUserFromStoreageStatus: 'FAILED' })
            return
        }
        const result = await ApiModule.shared().userDatasource.getUserProfile()
        setState({ getUserFromStoreageStatus: result.isSuccess ? 'SUCCESS' : 'FAILED', user: result.data })
    },
    // updateProfile: (
    //     name: string,
    //     email: string,
    //     password?: string
    // ) => async ({ setState, getState }: UserStoreApi) => {
    //     const { user } = getState()
    //     if (!user) return
    //     setState({ updateProfileStatus: 'FETCHING' })
    //     const result = await ApiModule.shared().userDatasource.updateProfile({
    //         name, email, password, userId: user?.id
    //     })
    //     if (result.isSuccess) {
    //         setState({ user: result.data, updateProfileStatus: 'SUCCESS' })
    //     } else {
    //         setState({ updateProfileStatus: 'FAILED' })
    //     }
    // },
    // updateAvatar: (
    //     image: Image
    // ) => async ({ setState, getState, dispatch }: UserStoreApi) => {
    //     const { user } = getState()
    //     if (!user) return
    //     const result = await ApiModule.shared().userDatasource.updateAvatar(user.id, image)
    //     if (result.isSuccess) {
    //         dispatch(UserActions.getProfile())
    //     }
    // },
    getProfile: () => async ({ setState, getState }: UserStoreApi) => {
        const { user } = getState()
        if (!user) return
        setState({ getProfileStatus: 'FETCHING' })
        const result = await ApiModule.shared().userDatasource.getUserProfile()
        if (result.isSuccess) {
            setState({ user: result.data, getProfileStatus: 'SUCCESS' })
        } else {
            setState({ getProfileStatus: 'FAILED' })
        }
    },

    // refreshNotification: () => async ({ setState, getState }: UserStoreApi) => {
    //     const { user } = getState()
    //     if (!user) return
    //     setState({ refreshNotificationStatus: 'FETCHING' })
    //     const result = await ApiModule.shared().userDatasource.getNotification(user.id)
    //     if (result.isSuccess) {
    //         setState({ notifications: result.data, refreshNotificationStatus: 'SUCCESS' })
    //     } else {
    //         setState({ refreshNotificationStatus: 'FAILED' })
    //     }
    // }
}