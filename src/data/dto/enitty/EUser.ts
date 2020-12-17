export type EUser = {

    // ggid: string,
    // name: string
    // phone: string,

    // avatar: string,

    // account: string,
    // date: string,
    // active: string
    

    
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
}