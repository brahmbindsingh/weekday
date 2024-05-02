import React from "react";
import logo from "./logo.svg";
import "./App.css";
import JobCard from "./components/JobCard/JobCard";
import data from "./data.json";

function App() {
  return (
    <div className="jobs">
      {
        data.jdList.map((el)=>{
          return <JobCard
          key={el.jdUid}
          jdUid={el.jdUid}
          jdLink={el.jdLink}
          jobDetailsFromCompany={el.jobDetailsFromCompany}
          maxJdSalary={el.maxJdSalary}
          salaryCurrencyCode={el.salaryCurrencyCode}
          location={el.location}
          minExp={el.minExp ?? 0}
          maxExp={el.maxExp ?? 0}
          jobRole={el.jobRole}
        />
        })
      }
    </div>
  );
}

export default App;
