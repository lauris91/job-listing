import React, { useMemo } from "react";

const JobContainer = ({
  job: {
    id,
    logo,
    company,
    position,
    postedAt,
    location,
    contract,
    new: newJob,
    featured,
    languages,
    tools,
    role,
    level,
  },
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const labels = useMemo(() => [role, level, ...tools, ...languages], []);

  console.log("labels ", labels);
  return (
    <div
      className={`job-container ${id === 1 || id === 2 ? "border-left" : ""}`}
    >
      <div className="logo">
        <img alt="company-logo" src={`.${logo}`} />
      </div>
      <div className="job-description">
        <div className="job-description__company-row">
          {company}
          {newJob && <div className="label label__new">New!</div>}
          {featured && <div className="label label__featured">Featured</div>}
        </div>
        <div className="job-description__job-title">{position}</div>
        <div className="job-description__info-box">
          <div className="item">{postedAt}</div>
          <div className="item">{contract}</div>
          <div className="item">{location}</div>
        </div>
      </div>
      <div className="languages">
        {labels.map((label, index) => (
          <div key={index} className="languages__item">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobContainer;
