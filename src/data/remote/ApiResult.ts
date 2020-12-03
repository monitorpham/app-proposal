import { AxiosResponse, AxiosError } from 'axios'
import { showMessage } from 'react-native-flash-message'

export interface ApiResult<T = any> {
    id_token: string
    data: T,
    status: number,
    message: string
}

export class Result<T = any> {

    static fromAxiosResponse<DataT>(data: DataT, response: AxiosResponse<ApiResult>): Result<DataT> {
        const other = response
        console.log("apiresult",response)
        return new Result(data, other.status, other.data.message)
    }

    static fromAxiosError(error: AxiosError): Result {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return new Result(null, 1000, 'Đã xảy ra sự cố, vui lòng thử sau ít phút')
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return new Result(null, 1000, 'Đã xảy ra sự cố, vui lòng thử sau ít phút')
        } else {
            // Something happened in setting up the request that triggered an Error
            return new Result(null, 1000, 'Đã xảy ra sự cố, vui lòng thử sau ít phút')
        }
    }

    data: T
    status: number
    message: string
    isExeption: boolean

    get isSuccess(): boolean {
        return this.status === 200
    }

    constructor(
        data: T,
        status: number,
        message: string,
        isException: boolean = false
    ) {
        this.data = data
        this.status = status
        this.message = message
        this.isExeption = isException
        if (!this.isSuccess) {
            showMessage({
                message,
                type: 'warning'
            })
        }
    }
}
