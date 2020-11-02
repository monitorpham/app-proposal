import { EAgency } from '../dto'
import moment from 'moment'

export class Agency {

    static fromDto(dto: EAgency): Agency {
        return new Agency(
            dto.id,
            dto.address,
            dto.name,
            Number(dto.lat),
            Number(dto.lng),
            moment(dto.date).toDate(),
            dto.active === '1'
        )
    }

    id: string
    address: string
    name: string
    lat: number
    lng: number
    date: Date
    active: boolean

    constructor(
        id: string,
        address: string,
        name: string,
        lat: number,
        lng: number,
        date: Date,
        active: boolean,
    ) {
        this.id = id
        this.address = address
        this.name = name
        this.lat = lat
        this.lng = lng
        this.date = date
        this.active = active
    }
}