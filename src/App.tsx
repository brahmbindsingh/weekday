import React from "react";
import logo from "./logo.svg";
import "./App.css";
import JobCard from "./components/JobCard/JobCard";
import data from "./data.json";

function App() {
  return (
    <JobCard
      jdUid={data.jdList[0].jdUid}
      jdLink={data.jdList[0].jdLink}
      jobDetailsFromCompany={data.jdList[0].jobDetailsFromCompany}
      maxJdSalary={data.jdList[0].maxJdSalary}
      salaryCurrencyCode={data.jdList[0].salaryCurrencyCode}
      location={data.jdList[0].location}
      minExp={data.jdList[0].minExp ?? 0}
      maxExp={data.jdList[0].maxExp ?? 0}
      jobRole={data.jdList[0].jobRole}
    />
  );
}

export default App;
