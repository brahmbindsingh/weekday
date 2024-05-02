import {
  GET_ALL_JOBS_FAILIURE,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
} from "../constants/JobConstants";
import { IJobDetails } from "../constants/JobInterfaces";

export interface InitialState {
  loading: boolean;
  jobList: IJobDetails[];
}

export const jobReducer = (
  state: InitialState = { loading: true, jobList: [] },
  action: any
) => {
  switch (action.type) {
    case GET_ALL_JOBS_REQUEST:
      return {
        loading: true,
      };

    case GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobList: action.payload,
      };

    case GET_ALL_JOBS_FAILIURE:
      return {
        ...state,
        loading: false,
      };

    default: 
      return state;
  }
};
