import React from "react";
import ReactSelect from "react-select";

import JobListContainer from "./components/JobListContainer";

const options = [
  { value: "Frontend", label: "Frontend" },
  { value: "Junior", label: "Junior" },
  { value: "React", label: "React" },
  { value: "Sass", label: "Sass" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Fullstack", label: "Fullstack" },
  { value: "Midweight", label: "Midweight" },
  { value: "Django", label: "Django" },
  { value: "Phyton", label: "Phyton" },
  { value: "Vue", label: "Vue" },
  { value: "Backend", label: "Backend" },
  { value: "Ruby", label: "Ruby" },
  { value: "RoR", label: "RoR" },
];

function App() {
  return (
    <div className="wrapper">
      <header></header>
      <div className="content">
        <div className="search-box">
          <ReactSelect
            options={options}
            className="custom-select"
            placeholder="Filter options…"
            isClearable
            isMulti
            classNamePrefix="custom-select"
          />
        </div>
        {/* <img style={{ width: "88px" }} src={require(jobs[0].logo)} alt="" /> */}
        <JobListContainer />
      </div>
    </div>
  );
}

export default App;
