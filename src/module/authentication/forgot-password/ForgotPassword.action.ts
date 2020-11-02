import { ForgotPasswordStoreApi } from './ForgotPassword.type';
import { INITIAL_STATE } from './ForgotPassword.store';
import { ApiModule } from '@di';
import { showMessage } from 'react-native-flash-message';

export const ForgotPasswordActions = {
    reset: () => ({ setState }: ForgotPasswordStoreApi) => {
        setState(INITIAL_STATE)
    },
    getVerifyCode: (phoneNumber: string) => async ({ setState }: ForgotPasswordStoreApi) => {
        setState({ getVerifyCodeStatus: 'FETCHING' })
        const result = await ApiModule.shared().authenticationDatasource.getResetPasswordToken(phoneNumber)
        setState({ getVerifyCodeStatus: result.isSuccess ? 'SUCCESS' : 'FAILED', verifyCode: result.data })
    },
    updatePassword: (phoneNumber: string, password: string) => async ({ setState }: ForgotPasswordStoreApi) => {
        setState({ status: 'FETCHING' })
        const result = await ApiModule.shared().authenticationDatasource.updatePassword(phoneNumber, password)
        setState({ status: result.isSuccess ? 'SUCCESS' : 'FAILED' })
        showMessage({
            message: result.message,
            type: 'success'
        })
    },
}