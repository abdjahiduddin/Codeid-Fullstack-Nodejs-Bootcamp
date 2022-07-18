import React from "react";

export default function ProjectAssigmentShow(props) {
  return (
    <div>
      <h4>List Project Assigment</h4>
      <table>
        <thead>
          <tr>
            <th>Project Assignment ID</th>
            <th>Project Employee ID</th>
            <th>Project Start Date</th>
            <th>Project End Date</th>
            <th>Project Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.ProjectAssignment &&
            props.ProjectAssignment.map((pa) => (
              <tr key={pa.pras_proj_id}>
                <td>{pa.pras_proj_id}</td>
                <td>{pa.pras_employee_id}</td>
                <td>{pa.pras_startdate}</td>
                <td>{pa.pras_enddate}</td>
                <td>{pa.pras_status}</td>
                <td>
                  <button onClick={() => props.onDelete(pa.pras_proj_id, pa.pras_employee_id)}>
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
