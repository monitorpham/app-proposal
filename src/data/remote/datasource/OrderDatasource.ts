import { Proposal } from './../../model/Proposal';
import { EProposal } from './../../dto/enitty/EProposal';
import { ApiProvider } from '../Provider';
import { ApiResult, Result } from '../ApiResult';
import { EOrder, EAgency, PostOrderBody } from '../../dto';
import { Order, Agency } from '../../model';
import moment from 'moment';


export class OrderDatasource {
    provider: ApiProvider

    constructor(provider: ApiProvider) {
        this.provider = provider
    }

    // async order(body: PostOrderBody): Promise<Result> {
    //     try {
    //         const form = new FormData()
    //         form.append('user_id', body.userId)
    //         form.append('car_number_id', body.licensePlateId)
    //         form.append('shop_id', body.agencyId)
    //         form.append('price', body.price)
    //         form.append('date_booking', moment(body.dateBooking).format('YYYY-MM-DD'))
    //         form.append('time_booking', moment(body.timeBooking).format('HH:mm:ss'))
    //         const url = `booking`
    //         const response = await this.provider.post<ApiResult>(url, form)
    //         return Result.fromAxiosResponse(null, response)
    //     } catch (error) {
    //         return error
    //     }
    // }

    // async orderHistory(userId: string): Promise<Result<Proposal[]>> {
    //     try {
    //         const url = `proposals-data-table?user_id=${userId}`
    //         const response = await this.provider.get<ApiResult<EProposal[]>>(url)
    //         const proposals = response.data.data.map(x => Proposal.fromDto(x))
    //         return Result.fromAxiosResponse<Proposal[]>(proposals, response)
    //     } catch (error) {
    //         return error
    //     }
    // }

    // async orderDetail(userId: string, orderId: string): Promise<Result<Order>> {
    //     try {
    //         const url = `bookingDetail?user_id=${userId}&booking_id=${orderId}`
    //         const response = await this.provider.get<ApiResult<EOrder>>(url)
    //         const order = Order.fromDto(response.data.data)
    //         return Result.fromAxiosResponse<Order>(order, response)
    //     } catch (error) {
    //         return error
    //     }
    // }

    // async getAgencies(userId: string): Promise<Result<Agency[]>> {
    //     try {
    //         const url = `listShop?user_id=${userId}`
    //         const response = await this.provider.get<ApiResult<EAgency[]>>(url)
    //         const agencies = response.data.data.map(x => Agency.fromDto(x))
    //         return Result.fromAxiosResponse<Agency[]>(agencies, response)
    //     } catch (error) {
    //         return error
    //     }
    // }
}