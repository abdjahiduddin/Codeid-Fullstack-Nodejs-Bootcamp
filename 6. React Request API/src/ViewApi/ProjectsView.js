import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function ProjectsView() {
  const title = "List Projects";
  const [projects, setProjects] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.projectsApi.findAll().then((data) => {
      setProjects(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Project ID</th>
        <th>Project Name</th>
        <th>Created On</th>
        <th>Due Date</th>
        <th>Customer Name</th>
        <th>Description</th>
        <th>Status</th>
        <th>Project Amount</th>
        <th>Account Manager</th>
        <th>Employee ID</th>
        <tbody>
          {projects &&
            projects.map((project) => (
              <tr key={project.proj_id}>
                <td>{project.proj_id}</td>
                <td>{project.proj_name}</td>
                <td>{project.proj_createdon}</td>
                <td>{project.proj_duedate}</td>
                <td>{project.proj_cust_name}</td>
                <td>{project.proj_description}</td>
                <td>{project.proj_status}</td>
                <td>{project.proj_amount}</td>
                <td>{project.proj_account_mgr}</td>
                <td>{project.employee_id}</td>
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
