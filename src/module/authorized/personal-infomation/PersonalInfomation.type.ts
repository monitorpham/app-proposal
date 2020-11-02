import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountStackParams } from '@navigation';

export type PersonalInfomationState = { status: FetchStatus };
export type PersonalInfomationStoreApi = StoreActionApi<PersonalInfomationState>;

export type PersonalInfomationNavigationProps = StackNavigationProp<AccountStackParams, 'PersonalInfomation'>


export type PersonalInfomationProps = {
    navigation: PersonalInfomationNavigationProps
}