import { parsePhoneNumberFromString } from 'libphonenumber-js'
import emailValidator from 'email-validator'

export const ProfileInfomationValidators = {
    phone: (value: string | undefined, defaultValue: string | undefined = undefined): boolean => {
        if (!value) return false
        const phone = parsePhoneNumberFromString(value, 'VN')
        return phone?.isValid() === true
    },
    name: (value: string | undefined, defaultValue: string | undefined = undefined): boolean => {

        if (!value) return false
        return value.length > 0
    },
    password: (value: string | undefined, allowNullOrEmpty: boolean = false): boolean => {
        if (!value) return allowNullOrEmpty
        return value.length > 5
    },
    email: (value: string): boolean => {
        return emailValidator.validate(value)
    }
}

export const PasswordChangeValidators = {
    password: (value: string | undefined, allowNullOrEmpty: boolean = false): boolean => {
        if (!value) return allowNullOrEmpty
        return value.length > 5
    }
}