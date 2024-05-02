import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import JobCard from "./components/JobCard/JobCard";
import data from "./data.json";
import { FilterType, IJobDetails, IJobFilter } from "./constants/JobInterfaces";
import JobFilter from "./components/JobFilter/JobFilter";
import { enrichAllFilter } from "./enrichments/filter-value-enrichment";
import { JobActions } from "./actions/job-actions";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const jobActions: JobActions = new JobActions();
  const dispatch: any = useDispatch();

  const { loading, jobList } = useSelector((state: any) => state.jobs)

  const [filterList, setFilterList] = useState<IJobFilter[]>([
    {
      text: "Roles",
      type: FilterType.ROLES,
      width: 200
    },
    {
      text: "Number Of Employees",
      type: FilterType.NUMBER_OF_EMPLOYEES,
      width: 200
    },
    {
      text: "Experience",
      type: FilterType.EXPERIENCE,
      width: 200
    },
    {
      text: "Location",
      type: FilterType.LOCATION,
      width: 175,
    },
    {
      text: "Minimum Base Pay Salary",
      type: FilterType.MINIMUM_SALARY,
      width: 210,
    },
    {
      text: "Search Company Name",
      type: FilterType.SEARCH_COMPANY_NAME,
      width: 200,
    }
  ]);

  useEffect(() => {
    dispatch(jobActions.fetchJobs(10, 10));
    const list = enrichAllFilter(filterList, data.jdList);
    setFilterList(list);
  }, [])
  

  return (
    <>
      <div className="filters">
        {
          filterList.map((el)=>{
            return <JobFilter key={el.type} jobFilter={el} width={el.width} />
          })
        }
      </div>
      {
        !loading ?
          <div className="jobs">
            {
              jobList.map((el: IJobDetails)=>{
                return <JobCard
                key={el.jdUid}
                jobDetails = {el}
              />
              })
            }
          </div> :
          <></>
      }
    </>
  );
}

export default App;
