import { createStore, createHook } from 'react-sweet-state';
import { BookingActions } from './Booking.action';
import { BookingState } from './Booking.type';

export const INITIAL_STATE: BookingState = {
    orderStatus: 'INIT',
    getAgencyStatus: 'INIT',
    agencies: [],
    licensePlates: [],
    getLicensePlateStatus: 'INIT'
}

export const BookingStore = createStore<BookingState, typeof BookingActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: BookingActions,
    name: 'BookingStore'
});

export const useBooking = createHook(BookingStore);