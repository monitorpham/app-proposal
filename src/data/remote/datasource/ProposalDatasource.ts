import { EUser } from './../../dto/enitty/EUser';
import { ApiProvider } from '../Provider';
import { ApiResult, Result } from '../ApiResult';
import { EProposal,PostProposalBody,EHospitalDepartment } from '../../dto';
import { HospitalDepartment, User } from '../../model';
import moment from 'moment';

export class ProposalDatasource {
    provider: ApiProvider

    constructor(provider: ApiProvider) {
        this.provider = provider
    }

    async allProposals(): Promise<Result> {
        try {
            const url = `proposals-data-table`
            const response = await this.provider.get<ApiResult<EProposal[]>>(url, {
                headers: {
                    'Authorization': `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxMTMwMzY1Mn0.Uq0Fp8dmai9GcTC60IXjGB2lfNo6NP2DKnajD-26t_zBeiCSbI9EYhecu248vEPoAawK0KWK1ZyHBcmcUtBM3g'}`
                }
            })
            console.log("get proposals data", response)
            return Result.fromAxiosResponse(response.data, response)

        } catch (error) {
            return error
        }
    }

    async proposalDeatail(id:string): Promise<Result> {
        try {
            const url = `get-All-ProgressDetail-By-ProposalId?id=${id}`
            const response = await this.provider.get<ApiResult<EProposal[]>>(url, {
                headers: {
                    'Authorization': `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxMTMwMzY1Mn0.Uq0Fp8dmai9GcTC60IXjGB2lfNo6NP2DKnajD-26t_zBeiCSbI9EYhecu248vEPoAawK0KWK1ZyHBcmcUtBM3g'}`
                }
            })
            console.log("proposals detail", response)
            return Result.fromAxiosResponse(response.data, response)

        } catch (error) {
            return error
        }
    }

    async createProposal(body: PostProposalBody): Promise<Result> {
        try {
            const form = new FormData()
            const proposalForm: any = {
                "contentProposal": body.content,
                "hospitalDepartmentId": body.hosDepId,
                // "note": null,
                "startDate": body.dateAdding,
                "userExtraId": body.userListId,
                "additionalDate": body.additionalDate
              }
            // form.append('userExtraId', body.userListId)
            // // form.append('note', body.note)
            // form.append('hospitalDepartmentId', body.hosDepId)
            // form.append('additionalDate', body.additionalDate)
            // form.append('contentProposal', body.content)
            // form.append('startDate', moment(body.dateAdding).format('YYYY-MM-DD'))
            const url = `proposals`
            const response = await this.provider.post<ApiResult>(url, proposalForm,{
                headers: {
                    'Authorization': `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxMTMwMzY1Mn0.Uq0Fp8dmai9GcTC60IXjGB2lfNo6NP2DKnajD-26t_zBeiCSbI9EYhecu248vEPoAawK0KWK1ZyHBcmcUtBM3g'}`
                }
            })
            console.log('post form', response)
            return Result.fromAxiosResponse(null, response)
        } catch (error) {
            return error
        }
    }

    async getHospitalDepartment(): Promise<Result<HospitalDepartment[]>> {
        try {
            const url = `hospital-departments`
            const response = await this.provider.get<ApiResult<EHospitalDepartment[]>>(url, {
                headers: {
                    'Authorization': `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxMTMwMzY1Mn0.Uq0Fp8dmai9GcTC60IXjGB2lfNo6NP2DKnajD-26t_zBeiCSbI9EYhecu248vEPoAawK0KWK1ZyHBcmcUtBM3g'}`
                }
            })
            console.log("get hospital-departments data", response)
            const hospitalDepartment = response.data.map(x => HospitalDepartment.fromDto(x))
            console.log("hospitalDepartment", hospitalDepartment)
            return Result.fromAxiosResponse(hospitalDepartment, response)

        } catch (error) {
            return error
        }
    }

    async getUserList(): Promise<Result<User[]>> {
        try {
            const url = `users?size=100000`
            const response = await this.provider.get<ApiResult<EUser[]>>(url, {
                headers: {
                    'Authorization': `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxMTMwMzY1Mn0.Uq0Fp8dmai9GcTC60IXjGB2lfNo6NP2DKnajD-26t_zBeiCSbI9EYhecu248vEPoAawK0KWK1ZyHBcmcUtBM3g'}`
                }
            })
            console.log("get user list data", response)
            const userList = response.data.map(x => User.fromDto(x))
            console.log("userList", userList)
            return Result.fromAxiosResponse(userList, response)

        } catch (error) {
            return error
        }
    }

    // result.data.map(function(item, i){
        //     console.log('test',item);
        //     // return <li key={i}>Test</li>
        //   })
}