import { ELicensePlate } from '../dto'
import moment from 'moment'

export class CarLicensePlate {

    static fromDto(dto: ELicensePlate): CarLicensePlate {
        return new CarLicensePlate(
            dto.id,
            dto.user_id,
            dto.car_number,
            moment(dto.date).toDate(),
            dto.active === '1'
        )
    }

    id: string
    userId: string
    licensePlate: string
    date: Date
    active: boolean

    constructor(
        id: string,
        userId: string,
        licensePlate: string,
        date: Date,
        active: boolean,
    ) {
        this.id = id
        this.userId = userId
        this.licensePlate = licensePlate
        this.date = date
        this.active = active
    }
}