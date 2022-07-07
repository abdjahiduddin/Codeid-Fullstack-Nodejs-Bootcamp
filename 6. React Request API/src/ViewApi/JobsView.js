import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function JobsView() {
  const title = "List Jobs";
  const [jobs, setJobs] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.jobsApi.findAll().then((data) => {
      setJobs(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Job ID</th>
        <th>Job Title</th>
        <th>Min Salary</th>
        <th>Max Salary</th>
        <tbody>
          {jobs &&
            jobs.map((job) => (
              <tr key={job.job_id}>
                <td>{job.job_id}</td>
                <td>{job.job_title}</td>
                <td>{job.min_salary}</td>
                <td>{job.max_salary}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };
  return (
    <div>
      <ShowData
      Title = {title}
      Display = {display}
      setDisplay = {setDisplay}
      renderTable = {renderTable}
      />
    </div>
  );
}
