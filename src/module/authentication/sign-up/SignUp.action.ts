import { SignUpStoreApi } from './SignUp.type';
import { INITIAL_STATE } from './SignUp.store';
import { ApiModule } from '@di';
import { Result, User } from '@data';

export const SignUpActions = {
    reset: () => async ({ setState }: SignUpStoreApi) => {
        setState(INITIAL_STATE)
    },
    getVerifyCode: (phoneNumber: string) => async ({ setState }: SignUpStoreApi) => {
        setState({ status: 'FETCHING' })
        const result = await ApiModule.shared().authenticationDatasource.getSignUpToken(phoneNumber)
        setState({ status: 'SUCCESS', verifyCode: result.data })
    },
    signUp: (phone: string, name: string, password: string) => async ({ setState }: SignUpStoreApi): Promise<Result<User | undefined>> => {
        setState({ status: 'FETCHING' })
        const result = await ApiModule.shared().authenticationDatasource.signUp({ password, phone, name })
        setState({ status: 'SUCCESS', user: result.data })
        return result
    },
}
