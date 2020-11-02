import { SignInStoreApi } from './SignIn.type';
import { INITIAL_STATE } from './SignIn.store';
import { ApiModule } from '@di';
import { GoogleAuthResult } from '@thirdparty';
import { PostGoogleAuth, User, Result, PostSignIn } from '@data';

export const SignInActions = {
    reset: () => ({ setState }: SignInStoreApi) => {
        setState(INITIAL_STATE)
    },
    signIn: (phone: string, password: string) => async ({ setState }: SignInStoreApi) => {
        setState({ status: 'FETCHING' })
        const body: PostSignIn = {
            phone,
            password
        }
        const response = await ApiModule.shared().authenticationDatasource.signIn(body)
        setState({ status: response.isSuccess ? 'SUCCESS' : 'FAILED', user: response.data })
    },
    googleAuth: ({ userInfo }: GoogleAuthResult) => async ({ setState }: SignInStoreApi) => {
        setState({ status: 'FETCHING' })
        const body: PostGoogleAuth = {
            email: userInfo.user.email,
            ggid: userInfo.user.id,
            name: userInfo.user.name ?? ''
        }
        const response = await ApiModule.shared().authenticationDatasource.googleAuth(body)
        setState({ status: response.isSuccess ? 'SUCCESS' : 'FAILED', user: response.data })
    }
}