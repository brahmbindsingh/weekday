import { GET_ALL_JOBS_FAILIURE, GET_ALL_JOBS_REQUEST, GET_ALL_JOBS_SUCCESS } from "../constants/JobConstants";

export class JobActions {
  fetchJobs = (limit: number, offset: number) => async (dispatch: any) => {
    dispatch({ type: GET_ALL_JOBS_REQUEST })
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: limit,
      offset: offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try{
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const resultString: string = await response.text();
        const json = JSON.parse(resultString);
        console.log(json);
        
        dispatch({ type: GET_ALL_JOBS_SUCCESS, payload: json.jdList })
        
    }
    catch(error){
        console.log(error);
        dispatch({ type: GET_ALL_JOBS_FAILIURE, payload: "ERROR" })
    }

  };
}
