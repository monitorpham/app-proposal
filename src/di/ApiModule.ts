import { OrderDatasource } from './../data/remote/datasource/OrderDatasource';
import { ApiProvider, AuthenticationDatasource, UserDatasource } from '@data';

export class ApiModule {

    static instance: ApiModule

    static shared(): ApiModule {
        if (!ApiModule.instance) {
            ApiModule.instance = new ApiModule()
        }
        return ApiModule.instance
    }

    apiProvider: ApiProvider

    authenticationDatasource: AuthenticationDatasource

    userDatasource: UserDatasource

    orderDatasource: OrderDatasource

    constructor() {
        this.apiProvider = new ApiProvider({
            baseURL: 'http://chap.com.vn/payment/api/'
        })
        this.authenticationDatasource = new AuthenticationDatasource(this.apiProvider)
        this.userDatasource = new UserDatasource(this.apiProvider)
        this.orderDatasource = new OrderDatasource(this.apiProvider)
    }
}