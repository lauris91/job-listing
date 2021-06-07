import React, { useState } from "react";
import ReactSelect from "react-select";

import JobListContainer from "./components/JobListContainer";
import jobs from "./data.json";

const options = [
  { value: "Frontend", label: "Frontend" },
  { value: "Junior", label: "Junior" },
  { value: "Senior", label: "Senior" },
  { value: "React", label: "React" },
  { value: "Sass", label: "Sass" },
  { value: "CSS", label: "CSS" },
  { value: "HTML", label: "HTML" },
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
  const [filteredValues, setFilteredValues] = useState([]);

  return (
    <div className="wrapper">
      <header></header>
      <div className="content">
        {filteredValues.length > 0 && (
          <div className="search-box">
            <ReactSelect
              options={options}
              className="custom-select"
              placeholder="Filter options…"
              isClearable
              isMulti
              classNamePrefix="custom-select"
              onChange={(val) => setFilteredValues(val)}
              value={filteredValues}
              openMenuOnClick={false}
            />
          </div>
        )}
        <JobListContainer
          jobs={jobs}
          filteredValues={filteredValues}
          setFilteredValues={setFilteredValues}
        />
      </div>
    </div>
  );
}

export default App;
