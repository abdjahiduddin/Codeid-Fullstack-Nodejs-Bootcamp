import React from "react";

export default function DepartmentsShow(props) {
  return (
    <div>
      <h4>List Departments</h4>
      <table>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Location ID</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.Departments &&
            props.Departments.map((department) => (
              <tr key={department.department_id}>
                <td>{department.department_id}</td>
                <td>{department.department_name}</td>
                <td>{department.location_id}</td>
                <td>
                  <button
                    onClick={() =>
                      props.onDelete(
                        department.department_id, department.department_name
                      )
                    }
                  >
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
