import { SignInStoreApi } from './SignIn.type';
import { INITIAL_STATE } from './SignIn.store';
import { ApiModule } from '@di';
import { User, Result, PostSignIn } from '@data';

export const SignInActions = {
    reset: () => ({ setState }: SignInStoreApi) => {
        setState(INITIAL_STATE)
    },
    signIn: (username: string, password: string) => async ({ setState }: SignInStoreApi) => {
        setState({ status: 'FETCHING' })
        const body: PostSignIn = {
            username,
            password
        }
        try{
            const response = await ApiModule.shared().authenticationDatasource.signIn(body)
            console.log("111111---",response)
            setState({ status: response.isSuccess ? 'SUCCESS' : 'FAILED', user: response.data })
        }catch(e){
            console.log(e)
        }
        

        
    }
}