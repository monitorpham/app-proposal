import { EAccount } from '../dto'

export class Account {

  static fromDto(dto: EAccount): Account {
    return new Account(
      dto.id,
      dto.activated,
      dto.authorities,
      dto.email,
      dto.firstName,
      dto.lastName,
      dto.login,
    )
  }

  id: string
  activated: boolean
  authorities: string[]
  email: string
  firstName: string
  lastName: string
  login: string

  constructor(
    id: string,
    activated: boolean,
    authorities: string[],
    email: string,
    firstName: string,
    lastName: string,
    login: string,
  ) {
    this.id = id
    this.activated = activated
    this.authorities = authorities
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.login = login
  }
}