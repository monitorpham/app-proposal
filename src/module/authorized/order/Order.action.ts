import { OrderStoreApi } from './Order.type';
import { INITIAL_STATE } from './Order.store';
import { ApiModule } from '@di';

export const OrderActions = {
    reset: () => ({ setState }: OrderStoreApi) => {
        setState(INITIAL_STATE)
    },
    getOrder: (userId: string, orderId: string) => async ({ setState }: OrderStoreApi) => {
        setState({ status: 'FETCHING' })
        const result = await ApiModule.shared().orderDatasource.orderDetail(userId, orderId)
        if (result.isSuccess) {
            setState({ status: 'SUCCESS', order: result.data })
        } else {
            setState({ status: 'FAILED' })
        }
    },
}