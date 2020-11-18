import { EProposal } from '../dto'
import moment from 'moment'

export class Proposal {

    static fromDto(dto: EProposal): Proposal {
        return new Proposal(
            dto.id,
            dto.contentProposal,
            dto.Group,
            dto.startDate,
            dto.endDate,
            dto.hospitalDepartment,
            dto.hospitalDepartmentId,
            dto.currentProgressName,
            dto.registerBy,
            dto.note,
            moment(dto.remainingDate).toDate(),
            moment(dto.additionalDate).toDate(),
            dto.deadLine,
            dto.status,
            dto.asignee,
            Number(dto.asigneeId)
        )
    }

    id: number;
    contentProposal: String;
    Group: String;
    startDate: String;
    endDate: String;
    hospitalDepartment: String;
    hospitalDepartmentId: number;
    currentProgressName: String;
    registerBy: "Admin";
    note: String;
    remainingDate: Date
    additionalDate: Date
    deadLine: String
    status: any
    asignee: String
    asigneeId: number;

    constructor(
        id: number,
        contentProposal: String,
        Group: String,
        startDate: String,
        endDate: String,
        hospitalDepartment: String,
        hospitalDepartmentId: number,
        currentProgressName: String,
        registerBy: "Admin",
        note: String,
        remainingDate: Date,
        additionalDate: Date,
        deadLine: String,
        status: any,
        asignee: String,
        asigneeId: number
    ) {

        this.id = id
        this.contentProposal = contentProposal
        this.Group = Group
        this.startDate = startDate
        this.endDate = endDate
        this.hospitalDepartment = hospitalDepartment
        this.hospitalDepartmentId = hospitalDepartmentId
        this.currentProgressName = currentProgressName
        this.registerBy = registerBy
        this.note = note
        this.remainingDate = remainingDate
        this.additionalDate = additionalDate
        this.deadLine = deadLine
        this.status = status
        this.asignee = asignee
        this.asigneeId = asigneeId

    }
}