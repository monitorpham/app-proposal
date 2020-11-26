export interface EProposal {
    id: number;
    contentProposal: string;
    Group: string;
    startDate: string;
    endDate: string;
    hospitalDepartment: string;
    hospitalDepartmentId: number;
    currentProgressName: string;
    registerBy: "Admin";
    note: string;
    remainingDate: Date
    additionalDate: Date
    deadLine: string
    status: any
    asignee: string
    asigneeId: number;

    // public convertDate(dateString: String) {
    //     if (dateString) {
    //         let arr = dateString.split('T')
    //         let temp = arr[0].toString()
    //         let arr2 = temp.split('-')
    //         // debugger;
    //         return arr2[2] + '-' + arr2[1] + '-' + arr2[0]
    //     }
    //     return ''
    // }
}