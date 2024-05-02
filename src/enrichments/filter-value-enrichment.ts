import { FilterType, IJobFilter, TFilters } from "../constants/JobInterfaces";

export const enrichAllFilter = (filterList: IJobFilter[]) => {
    return filterList.map((el)=>enrichSingleFilter(el));
}

export const enrichSingleFilter = (filter: IJobFilter) => {
    switch(filter.type){
        case FilterType.ROLES:

    }
}

const getUniqueValues = (type: TFilters) => {
    
}