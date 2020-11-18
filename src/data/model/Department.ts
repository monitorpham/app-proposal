import { EDepartment } from '../dto'

export class Department {

    static fromDto(dto: EDepartment): Department {
        return new Department(
            dto.id,
            dto.departmentName
        )
    }

    id: string
    departmentName: string


    constructor(
        id: string,
        departmentName: string

    ) {
        this.id = id
        this.departmentName = departmentName
    }
}