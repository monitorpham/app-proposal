import { SignInStoreApi } from './SignIn.type';
import { INITIAL_STATE } from './SignIn.store';
import { ApiModule } from '@di';
import { PostSignIn } from '@data';
import AsyncStorage from '@react-native-community/async-storage';
// import { User } from '@data';

// export const TOKEN = 'TOKEN'

// export async function saveTokenIntoStorage(userId: string) {
//     return AsyncStorage.setItem(TOKEN,userId)
// }

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
            setState({ status: response.isSuccess ? 'SUCCESS' : 'FAILED', user: response.data.data.id_token})
        }catch(e){
            console.log(e)
        }     
    },
    // setToken: (token: User) => async ({ setState }: SignInStoreApi) => {
    //     setState({ token })
    //     await saveTokenIntoStorage(token.token )
    // },
}