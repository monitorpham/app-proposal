import { AgencyMapStoreApi } from './AgencyMap.type';
import { INITIAL_STATE } from './AgencyMap.store';
import { ApiModule } from '@di';

export const AgencyMapActions = {
    reset: () => ({ setState }: AgencyMapStoreApi) => {
        setState(INITIAL_STATE)
    },

    getAgencies: (userId: string) => async ({ setState }: AgencyMapStoreApi) => {
        setState({ status: 'FETCHING' })
        const result = await ApiModule.shared().orderDatasource.getAgencies(userId)
        if (result.isSuccess) {
            setState({ status: 'SUCCESS', agencies: result.data })
        } else {
            setState({ status: 'FAILED' })
        }
    }
}