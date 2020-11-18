import { OrderDatasource } from './../data/remote/datasource/OrderDatasource';
import { ProposalDatasource } from './../data/remote/datasource/ProposalDatasource';

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

    proposalDatasource: ProposalDatasource

    constructor() {
        this.apiProvider = new ApiProvider({
            baseURL: 'https://deploy-proposal.herokuapp.com/api/'
        })
        this.authenticationDatasource = new AuthenticationDatasource(this.apiProvider)
        this.userDatasource = new UserDatasource(this.apiProvider)
        this.orderDatasource = new OrderDatasource(this.apiProvider)
        this.proposalDatasource = new ProposalDatasource(this.apiProvider)
    }
}