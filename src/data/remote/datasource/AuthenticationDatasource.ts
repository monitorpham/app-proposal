import { ApiProvider } from '../Provider';
import { ApiResult, Result } from '../ApiResult';
import { PostSignIn, EUser, PostGoogleAuth, PostSignUp } from '../../dto';
import { User } from '../../model';

export class AuthenticationDatasource {
    provider: ApiProvider

    constructor(provider: ApiProvider) {
        this.provider = provider
    }

    async signUp(body: PostSignUp): Promise<Result<User | undefined>> {
        try {
            const form = new FormData()
            form.append('phone', body.phone)
            form.append('name', body.name)
            form.append('password', body.password)
            const response = await this.provider.post<ApiResult<EUser>>('register', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const user = User.fromDto(response.data.data)
            return Result.fromAxiosResponse(user, response)
        } catch (error) {
            return error
        }
    }

    async signIn(body: PostSignIn): Promise<Result<User | undefined>> {
        try {
            const url = `login?phone=${body.phone}&password=${body.password}`
            const response = await this.provider.get<ApiResult<EUser>>(url, undefined)
            const user = User.fromDto(response.data.data)
            return Result.fromAxiosResponse(user, response)
        } catch (error) {
            return error
        }
    }

    async googleAuth(body: PostGoogleAuth): Promise<Result<User | undefined>> {
        try {
            const url = `loginGoogle?ggid=${body.ggid}&name=${body.name}&email=${body.email}`
            const response = await this.provider.get<ApiResult<EUser>>(url, undefined)
            const user = User.fromDto(response.data.data)
            return Result.fromAxiosResponse(user, response)
        } catch (error) {
            return error
        }
    }

    async getSignUpToken(phoneNumber: string): Promise<Result<number>> {
        try {
            const url = `verifyCode?phone=${phoneNumber}`
            const response = await this.provider.get<ApiResult<number>>(url)
            return Result.fromAxiosResponse(response.data.data, response)
        } catch (error) {
            return error
        }
    }

    async getResetPasswordToken(phoneNumber: string): Promise<Result<number>> {
        try {
            const url = `forgetPassword?phone=${phoneNumber}`
            const response = await this.provider.post<ApiResult<number>>(url)
            return Result.fromAxiosResponse(response.data.data, response)
        } catch (error) {
            return error
        }
    }

    async updatePassword(phoneNumber: string, password: string): Promise<Result> {
        try {
            const form = new FormData()
            form.append('phone', phoneNumber)
            form.append('password', password)
            const url = `changePassword`
            const response = await this.provider.post<ApiResult>(url, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return Result.fromAxiosResponse(response.data.data, response)
        } catch (error) {
            return error
        }
    }
}