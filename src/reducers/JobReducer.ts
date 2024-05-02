import {
  GET_ALL_JOBS_FAILIURE,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  UPDATE_JOBS_REQUEST,
  UPDATE_JOBS_SUCCESS,
} from "../constants/JobConstants";
import { IJobDetails, JobInitialState } from "../constants/JobInterfaces";

export const jobReducer: (state: JobInitialState, action: any) => JobInitialState = (
  state: JobInitialState = { loading: true, jobList: [], totalResults: 0, offset: 0 },
  action: any
): JobInitialState => {
  switch (action.type) {
    case GET_ALL_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_JOBS_SUCCESS:
      return {
        loading: false,
        jobList: action.payload.jobs,
        totalResults: action.payload.count,
        offset: state.offset + action.payload.jobs.length,
      };

    case GET_ALL_JOBS_FAILIURE:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_JOBS_SUCCESS:
      return {
        ...state,
        jobList: [...state.jobList, ...action.payload.jobs],
        offset: state.offset + action.payload.jobs.length,
      };

    default: 
      return state;
  }
};
