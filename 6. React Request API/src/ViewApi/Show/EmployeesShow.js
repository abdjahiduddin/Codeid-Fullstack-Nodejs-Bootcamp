import React from "react";

export default function EmployeesShow(props) {
  return (
    <div>
      <h4>List Employees</h4>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Hire Date</th>
            <th>Salary</th>
            <th>Manager ID</th>
            <th>Job ID</th>
            <th>Department ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.Employees &&
            props.Employees.map((employee) => (
              <tr key={employee.employee_id}>
                <td>{employee.employee_id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone_number}</td>
                <td>{employee.hire_date}</td>
                <td>{employee.salary}</td>
                <td>{employee.manager_id}</td>
                <td>{employee.job_id}</td>
                <td>{employee.department_id}</td>
                <td>
                  <button onClick={() => props.onDelete(employee.employee_id)}>
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
