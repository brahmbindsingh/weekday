export interface IJobDetails{
    jdUid: string,
    jdLink: string,
    jobDetailsFromCompany: string,
    maxJdSalary: number,
    minJdSalary?: number,
    salaryCurrencyCode: string,
    location: string,
    minExp?: number,
    maxExp?: number,
    jobRole: string
}