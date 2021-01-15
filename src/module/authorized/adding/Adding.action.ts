import { AddingStoreApi } from './Adding.type';
import { INITIAL_STATE } from './Adding.store';
import { ApiModule } from '@di';
import { PostProposalBody } from '@data';

export const AddingActions = {
    reset: () => ({ setState }: AddingStoreApi) => {
        setState(INITIAL_STATE)
    },

    resetProposal: () => ({ setState }: AddingStoreApi) => {
        setState({ createStatus: 'INIT' })
    },

    // getAgencies: (userId: string) => async ({ setState }: AddingStoreApi) => {
    //     setState({ getAgencyStatus: 'FETCHING' })
    //     const result = await ApiModule.shared().orderDatasource.getAgencies(userId)
    //     if (result.isSuccess) {
    //         setState({ getAgencyStatus: 'SUCCESS', agencies: result.data })
    //     } else {
    //         setState({ getAgencyStatus: 'FAILED' })
    //     }
    // },

    // getLicensePlates: (userId: string) => async ({ setState }: AddingStoreApi) => {
    //     setState({ getLicensePlateStatus: 'FETCHING' })
    //     const result = await ApiModule.shared().userDatasource.getLicensePlates(userId)
    //     if (result.isSuccess) {
    //         setState({ getLicensePlateStatus: 'SUCCESS', licensePlates: result.data })
    //     } else {
    //         setState({ getLicensePlateStatus: 'FAILED', })
    //     }
    // },

    createProposal: (body: PostProposalBody) => async ({ setState }: AddingStoreApi) => {
        setState({ createStatus: 'FETCHING' })
        const result = await ApiModule.shared().proposalDatasource.createProposal(body)
        console.log('createProposal', result)
        if (result.isSuccess) {
            setState({ createStatus: 'SUCCESS' })
        } else {
            setState({ createStatus: 'FAILED' })
        }
    },
    

    getHospitalDepartment: () => async ({ setState }: AddingStoreApi) => {
        setState({ getHospitalDepartmentStatus: 'FETCHING' })
        const result = await ApiModule.shared().proposalDatasource.getHospitalDepartment()
        console.log('get hp', result)
        if (result.isSuccess) {
            setState({ getHospitalDepartmentStatus: 'SUCCESS', hospitalDepartment: result.data })
        } else {
            setState({ getHospitalDepartmentStatus: 'FAILED' })
        }
    },

    getUserList: () => async ({ setState }: AddingStoreApi) => {
        setState({ getUserListStatus: 'FETCHING' })
        const result = await ApiModule.shared().proposalDatasource.getUserList()
        console.log('get user list', result)
        if (result.isSuccess) {
            setState({ getUserListStatus: 'SUCCESS', userList: result.data })
        } else {
            setState({ getUserListStatus: 'FAILED' })
        }
    },

}