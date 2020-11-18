import { ApiProvider } from '../Provider';
import { ApiResult, Result } from '../ApiResult';
import { EProposal } from '../../dto';

export class ProposalDatasource {
    provider: ApiProvider

    constructor(provider: ApiProvider) {
        this.provider = provider
    }

    async allProposals(): Promise<Result> {
        try {
            const url = `proposals-data-table`
            const response = await this.provider.get<ApiResult<EProposal[]>>(url)
            return Result.fromAxiosResponse( response.data, response)

        } catch (error) {
            return error
        }
    }

}