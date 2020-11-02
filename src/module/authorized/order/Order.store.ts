import { createStore, createHook } from 'react-sweet-state';
import { OrderActions } from './Order.action';
import { OrderState } from './Order.type';

export const INITIAL_STATE: OrderState = {
    status: 'INIT',
    order: undefined
}

export const OrderStore = createStore<OrderState, typeof OrderActions>({
    initialState: Object.assign({}, INITIAL_STATE),
    actions: OrderActions,
    name: 'OrderStore'
});

export const useOrder = createHook(OrderStore);