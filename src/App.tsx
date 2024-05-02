import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import JobCard from "./components/JobCard/JobCard";
import data from "./data.json";
import { FilterType, IJobFilter } from "./constants/JobInterfaces";
import JobFilter from "./components/JobFilter/JobFilter";
import { enrichAllFilter } from "./enrichments/filter-value-enrichment";

function App() {

  const [filterList, setFilterList] = useState([
    {
      text: "Roles",
      type: FilterType.ROLES,
    },
    {
      text: "Number Of Employees",
      type: FilterType.NUMBER_OF_EMPLOYEES,
    },
    {
      text: "Experience",
      type: FilterType.EXPERIENCE,
    },
    {
      text: "Location",
      type: FilterType.LOCATION,
    },
    {
      text: "Minimum Base Pay Salary",
      type: FilterType.MINIMUM_SALARY,
    },
    {
      text: "Search Company Name",
      type: FilterType.SEARCH_COMPANY_NAME,
    }
  ]);

  useEffect(() => {
    const list = enrichAllFilter(filterList,  data.jdList);
    setFilterList(list);
  }, [])
  

  return (
    <>
      <div className="filters">
        {
          filterList.map((el)=>{
            return <JobFilter key={el.type} jobFilter={el} />
          })
        }
      </div>
      <div className="jobs">
        {
          data.jdList.map((el)=>{
            return <JobCard
            key={el.jdUid}
            jobDetails = {el}
          />
          })
        }
      </div>
    </>
  );
}

export default App;
