import { EProgress } from '../dto'
import moment from 'moment'

export class Progress {

    static fromDto(dto: EProgress): Progress {
        return new Progress(
            dto.id,
            dto.startDate,
            dto.endDate,
            dto.performBy,
            dto.progress,
            dto.note,
        )
    }

    id: string;
    startDate: string;
    endDate: string;
    performBy: string;
    progress: string;
    note: string

    constructor(
        id: string,
        startDate: string,
        endDate: string,
        performBy: string,
        progress: string,
        note: string
    ) {
        this.id = id
        this.startDate = startDate
        this.endDate = endDate
        this.performBy = performBy
        this.progress = progress
        this.note = note
    }
}