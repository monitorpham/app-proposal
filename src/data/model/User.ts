import { EUser } from '../dto'
import { StringUtils } from '@util'

export class User {

    static fromDto(dto: EUser): User | undefined {
        if (!dto) return
        return new User(
            dto.id,
            dto.login,
            dto.token,
            dto.firstName,
            dto.lastName,
            dto.email,
            dto.activated,
            dto.langKey,
            dto.authorities,
            dto.createdBy,
            new Date(dto.createdDate),
            dto.lastModifiedBy,
            new Date(dto.lastModifiedDate),
            dto.password,
            dto.group,
            dto.key,
            dto.assign,
            dto.assignId
        )
    }

    id: any
    login: string;
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    activated: boolean;
    langKey: string;
    authorities: string[];
    createdBy: string;
    createdDate: Date;
    lastModifiedBy: string;
    lastModifiedDate: Date;
    password: string;
    group: any;
    key: any;
    assign: string;
    assignId: any

    // get formatedAmount() {
    //     return StringUtils.currenry(this.account)
    // }

    // get shortName(): string {
    //     return this.name.slice(0, 2)
    // }

    // get optionalPhone(): string {
    //     if (this.phone) return this.phone
    //     return 'Chưa có số điện thoại'
    // }

    // get optionalEmail(): string {
    //     if (this.email) return this.email
    //     return 'Chưa có Email'
    // }

    constructor(
        id: any,
        login: string,
        token: string,
        firstName: string,
        lastName: string,
        email: string,
        activated: boolean,
        langKey: string,
        authorities: string[],
        createdBy: string,
        createdDate: Date,
        lastModifiedBy: string,
        lastModifiedDate: Date,
        password: string,
        group: any,
        key: any,
        assign: string,
        assignId: any
    ) {
        this.id = id
        this.login = login
        this.token = token
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.activated = activated
        this.langKey = langKey
        this.authorities = authorities
        this.createdBy = createdBy
        this.createdDate = createdDate
        this.lastModifiedBy = lastModifiedBy
        this.lastModifiedDate = lastModifiedDate
        this.password = password
        this.group = group
        this.key = key
        this.assign = assign
        this.assignId = assignId
    }

}