import React, { useState } from "react";
import Wrapper from "../wrappers/FilterContent";
import SelectOption from "./SelectionOption";

const FilterContent = ({
  handleChange,
  categoryfilter,
  clearcategory,
  jobtypefilter,
  clearjobtype,
  experiencelvlfilter,
  clearexperiencelvl,
  search,
}) => {
  const [range, setRange] = useState(0);
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);

  const rangeChange = (e) => {
    setRange(e.target.value);
    handleChange(e);
  };

  const handleExperienceChange = (level) => {
    const updated = experienceLevels.includes(level)
      ? experienceLevels.filter((l) => l !== level)
      : [...experienceLevels, level];
    setExperienceLevels(updated);
    experiencelvlfilter(level);
  };

  const handleJobTypeChange = (type) => {
    const updated = jobTypes.includes(type)
      ? jobTypes.filter((t) => t !== type)
      : [...jobTypes, type];
    setJobTypes(updated);
    jobtypefilter(type);
  };

  const clearAll = () => {
    setRange(0);
    setExperienceLevels([]);
    setJobTypes([]);
    clearcategory();
    clearjobtype();
    clearexperiencelvl();
    handleChange({ target: { name: "wage", value: 0 } });
  };

  return (
    <Wrapper>
      <div className="filter-content">
        <div className="job-filter glassmorphism ">
          <h2 className="filter-name">Job Filter</h2>
          <button className="btn-clear" onClick={clearAll}>
            clear all
          </button>
        </div>

        <SelectOption
          categoryfilter={categoryfilter}
          clearcategory={clearcategory}
        />

        {/* Experience level */}
        <div className="lvl glassmorphism">
          <div className="lvlheader">
            <span className="heading4">Experience level</span>
            <button
              className="btn-clear"
              onClick={() => {
                setExperienceLevels([]);
                clearexperiencelvl();
              }}
            >
              clear all
            </button>
          </div>
          <div className="lvlboxes">
            {["Entry Level", "Interdimate", "Expert"].map((level) => (
              <div className="box" key={level}>
                <input
                  type="checkbox"
                  name={level}
                  checked={experienceLevels.includes(level)}
                  onChange={() => handleExperienceChange(level)}
                />
                <span className="label-content">{level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Minimum wage */}
        <div className="slide-range glassmorphism">
          <h4>Minimum wage</h4>
          <div className="range-container">
            <span> RS {range}</span>
            <input
              type="range"
              name="wage"
              min="0"
              max="100000"
              className="range"
              value={range}
              onChange={rangeChange}
            />
          </div>
        </div>

        {/* Job type */}
        <div className="jobtype glassmorphism">
          <div className="jobtypeheader">
            <span className="heading4">Job Type</span>
            <button
              className="btn-clear"
              onClick={() => {
                setJobTypes([]);
                clearjobtype();
              }}
            >
              clear all
            </button>
          </div>
          <div className="jobtypeboxes">
            {["FullTime", "Freelance", "PartTime"].map((type) => (
              <div className="box" key={type}>
                <input
                  type="checkbox"
                  name={type}
                  checked={jobTypes.includes(type)}
                  onChange={() => handleJobTypeChange(type)}
                />
                <span className="label-content">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FilterContent;
