export interface IJobDetails {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | undefined | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | undefined | null;
  maxExp: number | undefined | null;
  jobRole: string;
}

export interface IJobFilter {
  text: string;
  type: TFilters;
  values?: any[]
}

export type TFilters =
  | FilterType.ROLES
  | FilterType.NUMBER_OF_EMPLOYEES
  | FilterType.EXPERIENCE
  | FilterType.LOCATION
  | FilterType.MINIMUM_SALARY
  | FilterType.SEARCH_COMPANY_NAME
  ;

export enum FilterType {
  ROLES = "ROLES",
  NUMBER_OF_EMPLOYEES = "NUMBER_OF_EMPLOYEES",
  EXPERIENCE = "EXPERIENCE",
  LOCATION = "LOCATION",
  MINIMUM_SALARY = "MINIMUM_SALARY",
  SEARCH_COMPANY_NAME = "SEARCH_COMPANY_NAME",
}
