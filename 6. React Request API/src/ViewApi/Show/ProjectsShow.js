import React from "react";

export default function ProjectsShow(props) {
  return (
    <div>
      <h4>List Projects</h4>
      <table>
        <thead>
          <tr>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.Projects &&
            props.Projects.map((project) => (
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
                <td>
                  <button onClick={() => props.onDelete(project.proj_id)}>
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
