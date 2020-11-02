import { HistoryStoreApi } from './History.type';
import { INITIAL_STATE } from './History.store';
import { ApiModule } from '@di';

export const HistoryActions = {
    reset: () => async ({ setState }: HistoryStoreApi) => {
        setState(INITIAL_STATE)
    },
    getOrderHistory: (userId: string) => async ({ setState }: HistoryStoreApi) => {
        setState({ refreshStatus: 'FETCHING' })
        const result = await ApiModule.shared().orderDatasource.orderHistory(userId)
        if (result.isSuccess) {
            setState({ refreshStatus: 'SUCCESS', orders: result.data })
        } else {
            setState({ refreshStatus: 'FAILED' })
        }
    }
}