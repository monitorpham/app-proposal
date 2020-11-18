import { ApiProvider } from '../Provider';
import { ApiResult, Result } from '../ApiResult';
import { EEquipmentGroup } from '../../dto';
import { EquipmentGroup } from '../../model';

export class EquipmentGroups {
    provider: ApiProvider

    constructor(provider: ApiProvider) {
        this.provider = provider
    }

    async groups(): Promise<Result> {
        try {
            const url = `equiqment-groups`
            const response = await this.provider.get<ApiResult<EEquipmentGroup[]>>(url)
            return Result.fromAxiosResponse( response.data, response)

        } catch (error) {
            return error
        }
    }

}