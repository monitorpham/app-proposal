import { ProposalDetailStoreApi } from './ProposalDataDetail.type';
import { INITIAL_STATE } from './ProposalDataDetail.store';
import { ApiModule } from '@di';

export const ProposalDetailActions = {
    reset: () => async ({ setState }: ProposalDetailStoreApi) => {
        setState(INITIAL_STATE)
    },
    getProposalDetail: (id: string) => async ({ setState }: ProposalDetailStoreApi) => {
        setState({ refreshStatus: 'FETCHING' })
        const result = await ApiModule.shared().proposalDatasource.proposalDeatail(id)
        console.log("proposal detail:  ", result.data)

        // result.data.map(function(item, i){
        //     console.log('test',item);
        //     // return <li key={i}>Test</li>
        //   })


        if (result.isSuccess) {
            setState({ refreshStatus: 'SUCCESS', proposals: result.data })
        } else {
            setState({ refreshStatus: 'FAILED' })
        }
    }
}