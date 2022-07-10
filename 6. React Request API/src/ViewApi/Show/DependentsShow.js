import React from "react";

export default function DependentsShow(props) {
  return (
    <div>
      <h4>List Dependents</h4>
      <table>
        <thead>
          <tr>
            <th>Dependent ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Epmployee ID</th>
            <th>Relationship</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.Dependents &&
            props.Dependents.map((dependent) => (
              <tr key={dependent.dependent_id}>
                <td>{dependent.dependent_id}</td>
                <td>{dependent.first_name}</td>
                <td>{dependent.last_name}</td>
                <td>{dependent.employee_id}</td>
                <td>{dependent.relationship}</td>
                <td>
                  <button
                    onClick={() =>
                      props.onDelete(
                        dependent.dependent_id,
                        dependent.first_name + " " + dependent.last_name
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
