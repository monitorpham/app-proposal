import { ApiProvider } from '../Provider';
import { ApiResult, Result } from '../ApiResult';
import { EUser, PostProfileUpdating, ELicensePlate, ENotificationData } from '../../dto';
import { User, CarLicensePlate, NotificationData } from '../../model';
import { Image } from 'react-native-image-crop-picker';

export class UserDatasource {
    provider: ApiProvider

    constructor(provider: ApiProvider) {
        this.provider = provider
    }

    async updateProfile(body: PostProfileUpdating): Promise<Result<User | undefined>> {
        try {
            const form = new FormData()
            form.append('user_id', body.userId)
            form.append('email', body.email)
            form.append('name', body.name)
            if (body.password) {
                form.append('password', body.password)
            }
            const response = await this.provider.postForm<ApiResult<EUser>>('updateProfile', form)
            const user = User.fromDto(response.data.data)
            return Result.fromAxiosResponse(user, response)
        } catch (error) {
            return error
        }
    }

    userAvatarNameGenerator(userId: string, image: Image): string {
        return `${userId}-${new Date().getTime()}-${image.path ?? `Avatar.png`}`
    }

    async updateAvatar(userId: string, image: Image): Promise<Result> {
        try {
            const form = new FormData()
            form.append('user_id', userId)
            form.append('img', {
                uri: image.path,
                name: this.userAvatarNameGenerator(userId, image),
                type: image.mime
            })
            const response = await this.provider.post<ApiResult<EUser>>('updateAvatar', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return Result.fromAxiosResponse(null, response)
        } catch (error) {
            return error
        }
    }

    async getUserProfile(userId: string): Promise<Result<User | undefined>> {
        try {
            const url = `getInfo?user_id=${userId}`
            const response = await this.provider.get<ApiResult<EUser>>(url)
            const user = User.fromDto(response.data.data)
            return Result.fromAxiosResponse(user, response)
        } catch (error) {
            return error
        }
    }

    async getNotification(userId: string): Promise<Result<NotificationData[]>> {
        try {
            const url = `notification?user_id=${userId}`
            const response = await this.provider.get<ApiResult<ENotificationData[] | undefined>>(url)
            const notifications = response.data.data?.map(x => NotificationData.fromDto(x)) ?? []
            return Result.fromAxiosResponse(notifications, response)
        } catch (error) {
            return error
        }
    }

    async getLicensePlates(userId: string): Promise<Result<CarLicensePlate[]>> {
        try {
            const url = `listCarNumber?user_id=${userId}`
            const response = await this.provider.get<ApiResult<ELicensePlate[] | undefined>>(url)
            const plates = response.data.data?.map(x => CarLicensePlate.fromDto(x)) ?? []
            return Result.fromAxiosResponse(plates, response)
        } catch (error) {
            return error
        }
    }

    async addLicensePlate(userId: string, value: string): Promise<Result<CarLicensePlate>> {
        try {
            const form = new FormData()
            form.append('user_id', userId)
            form.append('car_number', value)
            const url = `addCarNumber`
            const response = await this.provider.postForm<ApiResult<ELicensePlate>>(url, form)
            const plate = CarLicensePlate.fromDto(response.data.data)
            return Result.fromAxiosResponse(plate, response)
        } catch (error) {
            return error
        }
    }

    async removeLicensePlate(userId: string, value: string): Promise<Result> {
        try {
            const form = new FormData()
            form.append('user_id', userId)
            form.append('car_number_id', value)
            const url = `deleteCarNumber`
            const response = await this.provider.postForm<ApiResult>(url, form)
            return Result.fromAxiosResponse(null, response)
        } catch (error) {
            return error
        }
    }
}