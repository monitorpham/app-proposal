import { GoogleSignin, statusCodes, User } from 'react-native-google-signin';

function configure() {
    GoogleSignin.configure();
}

export type GoogleAuthError = 'CANCELLED' | 'IN_PROGRESS_ALREADY' | 'NOT_AVAILABLE' | 'OTHER'

export class GoogleAuthResult {
    isSucess!: boolean
    error?: GoogleAuthError
    userInfo!: User

    static fromUser(user: User): GoogleAuthResult {
        const result = new GoogleAuthResult()
        result.userInfo = user
        result.isSucess = true
        return result
    }

    static fromCode(code: string): GoogleAuthResult {
        const result = new GoogleAuthResult()
        result.isSucess = false
        if (code === statusCodes.SIGN_IN_CANCELLED) {
            result.error = 'CANCELLED'
        } else if (code === statusCodes.IN_PROGRESS) {
            result.error = 'IN_PROGRESS_ALREADY'
        } else if (code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            result.error = 'NOT_AVAILABLE'
        } else {
            result.error = 'OTHER'
        }
        return result
    }

}

async function auth(): Promise<GoogleAuthResult> {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        return GoogleAuthResult.fromUser(userInfo)
    } catch (error) {
        return GoogleAuthResult.fromCode(error.code)
    }
}

export const GoogleAuth = {
    configure,
    auth,
}