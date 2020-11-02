import { EUser } from '../dto'
import { StringUtils } from '@util'

export class User {

    static fromDto(dto: EUser): User | undefined {
        if (!dto) return
        return new User(
            dto.id,
            dto.name,
            dto.ggid,
            dto.phone,
            dto.email,
            dto.avatar,
            Number(dto.account),
            new Date(dto.date),
            dto.active === '1'
        )
    }

    id: string
    name: string
    googleId: string
    phone: string
    email: string
    avatar: string
    account: number
    date: Date
    active: boolean

    get formatedAmount() {
        return StringUtils.currenry(this.account)
    }

    get shortName(): string {
        return this.name.slice(0, 2)
    }

    get optionalPhone(): string {
        if (this.phone) return this.phone
        return 'Chưa có số điện thoại'
    }

    get optionalEmail(): string {
        if (this.email) return this.email
        return 'Chưa có Email'
    }

    constructor(
        id: string,
        name: string,
        ggid: string,
        phone: string,
        email: string,
        avatar: string,
        account: number,
        date: Date,
        active: boolean,
    ) {
        this.id = id
        this.name = name
        this.googleId = ggid
        this.phone = phone
        this.email = email
        this.avatar = avatar
        this.account = account
        this.date = date
        this.active = active
    }

}