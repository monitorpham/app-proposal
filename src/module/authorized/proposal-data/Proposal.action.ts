import { ProposalStoreApi } from './Proposal.type';
import { INITIAL_STATE } from './Proposal.store';
import { ApiModule } from '@di';

export const ProposalActions = {
    reset: () => async ({ setState }: ProposalStoreApi) => {
        setState(INITIAL_STATE)
    },
    getAllProposals: () => async ({ setState }: ProposalStoreApi) => {
        setState({ refreshStatus: 'FETCHING' })
        const result = await ApiModule.shared().proposalDatasource.allProposals()
        if (result.isSuccess) {
            setState({ refreshStatus: 'SUCCESS', proposals: result.data })
        } else {
            setState({ refreshStatus: 'FAILED' })
        }
    }
}