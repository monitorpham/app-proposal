import { EHospitalDepartment } from '../dto'

export class HospitalDepartment {

    static fromDto(dto: EHospitalDepartment): HospitalDepartment {
        return new HospitalDepartment(
            dto.id,
            dto.hospitalDepartmentName
        )
    }

    id: string
    hospitalDepartmentName: string


    constructor(
        id: string,
        hospitalDepartmentName: string

    ) {
        this.id = id
        this.hospitalDepartmentName = hospitalDepartmentName
    }
}