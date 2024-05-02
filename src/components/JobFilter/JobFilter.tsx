import React from "react";
import { FilterType, IJobFilter } from "../../constants/JobInterfaces";
import "./JobFilter.css";

interface Props {
  jobFilter: IJobFilter;
}

const JobFilter = (props: Props) => {
  if (props.jobFilter.type === FilterType.SEARCH_COMPANY_NAME) {
    return <></>;
  } else {
    return (
      <div className="filter">
        <select name={props.jobFilter.type} id={props.jobFilter.type}>
            <option value="" disabled selected>{props.jobFilter.text}</option>
        </select>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 125"
        >
          <path
            className="svg-color"
            d="M97.1,24.8c-2.5-2.5-6.5-2.5-8.9,0l-38,38l-38-38c-2.5-2.5-6.5-2.5-8.9,0c-1.2,1.2-1.9,2.8-1.9,4.5  c0,1.7,0.7,3.3,1.9,4.5l42.5,42.5c1.2,1.2,2.8,1.9,4.5,1.9c1.7,0,3.3-0.7,4.5-1.9l42.5-42.5c1.2-1.2,1.9-2.8,1.9-4.5  C99,27.5,98.3,26,97.1,24.8z"
          />
        </svg>
      </div>
    );
  }
};

export default JobFilter;