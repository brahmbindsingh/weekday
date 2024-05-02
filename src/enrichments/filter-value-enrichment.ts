import { FilterType, IJobDetails, IJobFilter, TFilters } from "../constants/JobInterfaces";

export const enrichAllFilter = (filterList: IJobFilter[], jobList: IJobDetails[]) => {
    for(let i=0;i<filterList.length;i++){
        if(filterList[i].type !== FilterType.SEARCH_COMPANY_NAME){
            filterList[i].values = getUniqueValues(filterList[i].type, jobList);
        }
    }
    return filterList;
}

// export const enrichSingleFilter = (filter: IJobFilter, jobList: IJobDetails[]) => {
//     switch(filter.type){
//         case FilterType.ROLES:
//             return getUniqueValues(FilterType.)
//     }
// }

const getUniqueValues = (type: TFilters, jobList: IJobDetails[]) => {
    switch(type){
        case FilterType.ROLES:
            return getUniRoles(jobList)

        case FilterType.LOCATION: 
            return getUniqueLocation(jobList);
    }
}

const getUniRoles = (jobList: IJobDetails[]) => {
    let uniqueValues: string[] = [];
    for(let i=0;i<jobList.length;i++) {
        if(!uniqueValues.includes(jobList[i].jobRole)){
            uniqueValues.push(jobList[i].jobRole);
        }
    }
    return uniqueValues;
}

const getUniqueLocation = (jobList: IJobDetails[]) => {
    let uniqueValues: string[] = [];
    for(let i=0;i<jobList.length;i++) {
        if(!uniqueValues.includes(jobList[i].location)){
            uniqueValues.push(jobList[i].location);
        }
    }
    return uniqueValues;
}