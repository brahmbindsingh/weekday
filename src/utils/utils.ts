export const getJobProfile = (job: string) => {
    switch(job.toLowerCase()){
        case 'backend':
        case 'frontend':
            return capitalizeString(job+" Engineer");

        default: 
        return capitalizeString(job);
    }
}

export const toCaptialCase = (value: string) => {
    let str = value.trim().split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
}

export const capitalizeString = (value: string) => {
    let str = value.trim().split(' ');
    str = str.map((el)=>toCaptialCase(el));
    return str.join(' '); 
}