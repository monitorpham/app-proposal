import { EEquipmentGroup } from '../dto'

export class EquipmentGroup {

    static fromDto(dto: EEquipmentGroup): EquipmentGroup {
        return new EquipmentGroup(
            dto.id,
            dto.nameGroup,
            dto.departmentId,
        )
    }

    id: string
    nameGroup: string
    departmentId: string


    constructor(
        id: string,
        nameGroup: string,
        departmentId: string
    ) {
        this.id = id
        this.nameGroup = nameGroup,
        this.departmentId = departmentId
    }
}