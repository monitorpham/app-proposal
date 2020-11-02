import { ENotificationData } from '../dto'
import moment from 'moment'

export class NotificationData {

    static fromDto(dto: ENotificationData) {
        return new NotificationData(
            dto.id,
            dto.user_id,
            dto.title,
            dto.content,
            moment(dto.date).toDate(),
            dto.active === '`'
        )
    }

    id: string
    userId: string
    title: string
    content: string
    date: Date
    active: boolean

    constructor(
        id: string,
        userId: string,
        title: string,
        content: string,
        date: Date,
        active: boolean
    ) {
        this.id = id
        this.userId = userId
        this.title = title
        this.content = content
        this.date = date
        this.active = active
    }
}