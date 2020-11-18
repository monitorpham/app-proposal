export interface EAccount {
  id: string,
  activated: boolean,
  authorities: string[],
  email: string,
  firstName: string,
  lastName: string,
  login: string,
}