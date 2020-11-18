import { EUserExtras } from '../dto'

export class UserExtras {

    static fromDto(dto: EUserExtras): UserExtras {
        return new UserExtras(
            dto.id,
            dto.phone,
            dto.group,
        )
    }

    id: number;
    phone: string;
    group: string

    constructor(
        id: number,
        phone: string,
        group: string
    ) {
        this.id = id
        this.phone = phone
        this.group = group
    }
}