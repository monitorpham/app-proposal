import {
    StoreActionApi,
} from 'react-sweet-state';
import { FetchStatus } from '@constant'
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthenticationStackParams } from '@navigation';

export type {{$name}}State = { status: FetchStatus };
export type {{$name}}StoreApi = StoreActionApi<{{$name}}State>;

export type {{$name}}NavigationProps = StackNavigationProp<AuthenticationStackParams, '{{$name}}'>


export type {{$name}}Props = {
    navigation: {{$name}}NavigationProps
}