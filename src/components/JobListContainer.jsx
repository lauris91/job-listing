import React, { useMemo } from "react";

import JobContainer from "./JobContainer";

const JobListContainer = ({ jobs, filteredValues, setFilteredValues }) => {
  const entries = useMemo(
    () =>
      jobs.filter((job) => {
        const labels = [job.role, job.level, ...job.tools, ...job.languages];
        return filteredValues
          .map((x) => x.value)
          .every((x) => labels.includes(x));
      }),
    [filteredValues, jobs]
  );

  return (
    <div className="job-list-container">
      {entries.length > 0 ? (
        entries.map((job, index) => (
          <JobContainer
            key={index}
            job={job}
            labels={[job.role, job.level, ...job.tools, ...job.languages]}
            onLabelClick={({ target: { innerText: val } }) => {
              if (!filteredValues.map((x) => x.value).includes(val))
                setFilteredValues([
                  ...filteredValues,
                  { value: val, label: val },
                ]);
            }}
          />
        ))
      ) : (
        <div className="job-container job-container--empty">No jobs found</div>
      )}
    </div>
  );
};

export default JobListContainer;
