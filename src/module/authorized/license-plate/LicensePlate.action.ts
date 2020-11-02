import { LicensePlateStoreApi } from './LicensePlate.type';
import { INITIAL_STATE } from './LicensePlate.store';
import { ApiModule } from '@di';
import { CarLicensePlate } from '@data';

export const LicensePlateActions = {
    reset: () => ({ setState }: LicensePlateStoreApi) => {
        setState(INITIAL_STATE)
    },
    getLicensePlates: (userId: string) => async ({ setState }: LicensePlateStoreApi) => {
        setState({ getLicensePlateStatus: 'FETCHING' })
        const result = await ApiModule.shared().userDatasource.getLicensePlates(userId)
        if (result.isSuccess) {
            setState({ getLicensePlateStatus: 'SUCCESS', licensePlates: result.data })
        } else {
            setState({ getLicensePlateStatus: 'FAILED', })
        }
    },
    updateLicensePlates: (userId: string, addedPlates: CarLicensePlate[]) => async ({ setState, dispatch }: LicensePlateStoreApi) => {
        setState({ updatingStatus: 'FETCHING' })
        const addingPromises = addedPlates
            .map(x => ApiModule.shared().userDatasource.addLicensePlate(userId, x.licensePlate))
        const result = await Promise.all(addingPromises)
        dispatch(LicensePlateActions.getLicensePlates(userId))
        setState({ updatingStatus: 'SUCCESS' })
    },
}