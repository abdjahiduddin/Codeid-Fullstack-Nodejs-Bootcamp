import React from "react";

export default function JobsShow(props) {
  return (
    <div>
      <h4>List Jobs</h4>
      <table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Job Title</th>
            <th>Min Salary</th>
            <th>Max Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.Jobs &&
            props.Jobs.map((job) => (
              <tr key={job.job_id}>
                <td>{job.job_id}</td>
                <td>{job.job_title}</td>
                <td>{job.min_salary}</td>
                <td>{job.max_salary}</td>
                <td>
                  <button
                    onClick={() => props.onDelete(job.job_id, job.job_title)}
                  >
                    {" "}
                    Delete
                  </button>
                  <button onClick={()=> (props.onEdit(job.job_id)) }> Edit </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
