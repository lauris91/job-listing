import React from "react";

import JobContainer from "./JobContainer";
import jobs from "../data.json";

console.log("jobs ", jobs);

const JobListCotnainer = () => {
  return (
    <div className="job-list-container">
      {jobs.map((job, index) => (
        <JobContainer key={index} job={job} />
      ))}
    </div>
  );
};

export default JobListCotnainer;
