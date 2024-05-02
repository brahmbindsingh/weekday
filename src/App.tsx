import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import JobCard from "./components/JobCard/JobCard";
import data from "./data.json";
import { FilterType, IJobDetails, IJobFilter } from "./constants/JobInterfaces";
import JobFilter from "./components/JobFilter/JobFilter";
import { enrichAllFilter } from "./enrichments/filter-value-enrichment";
import { JobActions } from "./actions/job-actions";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const jobActions: JobActions = new JobActions();
  const dispatch: any = useDispatch();

  const { loading, jobList, totalResults, offset } = useSelector(
    (state: any) => state.jobs
  );

  const [filterList, setFilterList] = useState<IJobFilter[]>([
    {
      text: "Roles",
      type: FilterType.ROLES,
      width: 200,
    },
    {
      text: "Number Of Employees",
      type: FilterType.NUMBER_OF_EMPLOYEES,
      width: 200,
    },
    {
      text: "Experience",
      type: FilterType.EXPERIENCE,
      width: 200,
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
    },
  ]);

  useEffect(() => {
    dispatch(jobActions.fetchJobs(10, offset));
    const list = enrichAllFilter(filterList, data.jdList);
    setFilterList(list);
  }, []);

  const updateJobs = () => {
    dispatch(jobActions.fetchJobs(10, offset));
  };

  return (
    <>
      <div className="filters">
        {filterList.map((el) => {
          return <JobFilter key={el.type} jobFilter={el} width={el.width} />;
        })}
      </div>
      {!loading ? (
        <InfiniteScroll
          dataLength={jobList.length} //This is important field to render the next data
          next={updateJobs}
          hasMore={totalResults >= offset}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="jobs">
            {jobList.map((el: IJobDetails) => {
              return <JobCard key={el.jdUid} jobDetails={el} />;
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
