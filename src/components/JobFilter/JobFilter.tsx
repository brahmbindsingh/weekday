import React, { useEffect, useState } from "react";
import { FilterType, IJobFilter } from "../../constants/JobInterfaces";
import "./JobFilter.css";
import arrowImg from "../../assets/images/arrow.png";

interface Props {
  jobFilter: IJobFilter;
  width: number;
}

const JobFilter = (props: Props) => {
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);

  if (props.jobFilter.type === FilterType.SEARCH_COMPANY_NAME) {
    return (
      <div className="company-container" style={{ width: `${props.width}px` }}>
        <input type="text" placeholder="Search Company Name" />
      </div>
    );
  } else {
    return (
      <div
        className="filter-container"
        style={{
          width: `${props.width}px`,
          borderBottom: dropdownActive
            ? "1px solid white"
            : "1px solid var(--text-grey-color)",
          borderBottomLeftRadius: dropdownActive ? "0" : "5px",
          borderBottomRightRadius: dropdownActive ? "0" : "5px",
        }}
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        <div className="filter">
          <p>{props.jobFilter.text}</p>
          <img src={arrowImg} alt="" />
        </div>
        {dropdownActive == true && props.jobFilter.values !== undefined ? (
          <div className="dropdown" style={{ width: `${props.width}px` }}>
            {props.jobFilter.values?.map((value: any, index: number) => {
              return <div className="value">{value}</div>;
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default JobFilter;
