import { EOrder } from '../dto/enitty/EOrder';
import moment from 'moment';

export class Order {
    static fromDto(dto: EOrder): Order {
        return new Order(
            dto.id,
            dto.user_id,
            dto.car_number_id,
            Number(dto.price),
            dto.address,
            Number(dto.payment),
            dto.date_booking,
            dto.time_booking,
            moment(dto.date).toDate(),
            dto.active === '1',
            dto.car_number
        )
    }

    id: string
    userId: string
    licensePlateId: string
    price: number
    address: string
    payment: number
    bookingDate: string
    bookignTime: string
    date: Date
    active: boolean
    licensePlate: string

    constructor(
        id: string,
        userId: string,
        licensePlateId: string,
        price: number,
        address: string,
        payment: number,
        bookingDate: string,
        bookignTime: string,
        date: Date,
        active: boolean,
        licensePlate: string,
    ) {
        this.id = id
        this.userId = userId
        this.licensePlateId = licensePlateId
        this.price = price
        this.address = address
        this.payment = payment
        this.bookingDate = bookingDate
        this.bookignTime = bookignTime
        this.date = date
        this.active = active
        this.licensePlate = licensePlate
    }
}