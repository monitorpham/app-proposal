import { BookingStoreApi } from './Booking.type';
import { INITIAL_STATE } from './Booking.store';
import { ApiModule } from '@di';
import { PostOrderBody } from '@data';

export const BookingActions = {
    reset: () => ({ setState }: BookingStoreApi) => {
        setState(INITIAL_STATE)
    },

    resetOrder: () => ({ setState }: BookingStoreApi) => {
        setState({ orderStatus: 'INIT' })
    },

    getAgencies: (userId: string) => async ({ setState }: BookingStoreApi) => {
        setState({ getAgencyStatus: 'FETCHING' })
        const result = await ApiModule.shared().orderDatasource.getAgencies(userId)
        if (result.isSuccess) {
            setState({ getAgencyStatus: 'SUCCESS', agencies: result.data })
        } else {
            setState({ getAgencyStatus: 'FAILED' })
        }
    },

    getLicensePlates: (userId: string) => async ({ setState }: BookingStoreApi) => {
        setState({ getLicensePlateStatus: 'FETCHING' })
        const result = await ApiModule.shared().userDatasource.getLicensePlates(userId)
        if (result.isSuccess) {
            setState({ getLicensePlateStatus: 'SUCCESS', licensePlates: result.data })
        } else {
            setState({ getLicensePlateStatus: 'FAILED', })
        }
    },

    order: (body: PostOrderBody) => async ({ setState }: BookingStoreApi) => {
        setState({ orderStatus: 'FETCHING' })
        const result = await ApiModule.shared().orderDatasource.order(body)
        if (result.isSuccess) {
            setState({ orderStatus: 'SUCCESS' })
        } else {
            setState({ orderStatus: 'FAILED' })
        }
    },
}